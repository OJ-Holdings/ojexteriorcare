import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const { templateData, recipientEmail } = await req.json();
  const {
    name, phone, email, address, service, description, smsConsent,
    propertyType, businessName, waterAccess, recurringInterest,
  } = templateData;

  const isCommercial = propertyType === "commercial";

  const commercialRows = isCommercial
    ? `
        <p><b>Lead Type:</b> Commercial</p>
        <p><b>Business Name:</b> ${businessName || "Not provided"}</p>
        <p><b>Water Spigot On Site:</b> ${waterAccess ?? "Not sure / not provided"}</p>
        <p><b>Interested In Recurring Service:</b> ${recurringInterest ? "Yes" : "No"}</p>
      `
    : "";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
    },
    body: JSON.stringify({
      from: "OJ Exterior Care <notifications@ojexteriorcare.com>",
      to: [recipientEmail],
      subject: `New ${isCommercial ? "Commercial " : ""}Quote Request – ${name}`,
      html: `
        <h2>New ${isCommercial ? "Commercial " : ""}Quote Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Details:</b> ${description}</p>
        ${commercialRows}
        <p><b>SMS Consent:</b> ${smsConsent ?? "Not recorded"}</p>
      `,
    }),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    status: res.ok ? 200 : 400,
  });
});
