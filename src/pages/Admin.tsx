import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, LogIn, LogOut, RefreshCw, Phone, Mail, MapPin, Clock, Wrench, FileText } from "lucide-react";

interface QuoteRequest {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  address: string | null;
  service_needed: string | null;
  description: string | null;
  created_at: string;
}

const Admin = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) fetchQuotes();
  }, [session]);

  const fetchQuotes = async () => {
    const { data, error } = await supabase
      .from("quote_requests")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setQuotes(data as QuoteRequest[]);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    const { error } = await supabase.auth.signInWithPassword({ email: loginEmail, password: loginPassword });
    if (error) setLoginError(error.message);
    setLoginLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setQuotes([]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <RefreshCw className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="bg-card border border-border rounded-xl p-6 space-y-5">
            <div className="text-center">
              <LogIn className="w-8 h-8 text-primary mx-auto mb-3" />
              <h1 className="text-xl font-bold font-heading">Admin Login</h1>
              <p className="text-sm text-muted-foreground mt-1">Sign in to view quote requests</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
              <button
                type="submit"
                disabled={loginLoading}
                className="w-full bg-gradient-orange text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {loginLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>
          <a href="/" className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground mt-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to site
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container flex items-center justify-between h-16">
          <h1 className="font-heading font-bold text-lg">Quote Requests</h1>
          <div className="flex items-center gap-3">
            <button onClick={fetchQuotes} className="p-2 hover:bg-secondary rounded-lg transition-colors" title="Refresh">
              <RefreshCw className="w-4 h-4" />
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="container py-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground text-sm">{quotes.length} total submissions</p>
          <a href="/" className="flex items-center gap-1 text-sm text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to site
          </a>
        </div>

        {quotes.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <FileText className="w-10 h-10 mx-auto mb-3 opacity-50" />
            <p>No quote requests yet.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {quotes.map((q) => (
              <div key={q.id} className="bg-card border border-border rounded-xl p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg">{q.name}</h3>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(q.created_at).toLocaleDateString("en-US", {
                      month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit",
                    })}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-primary" />
                    <a href={`tel:${q.phone}`} className="hover:text-foreground transition-colors">{q.phone}</a>
                  </span>
                  {q.email && (
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-primary" />
                      <a href={`mailto:${q.email}`} className="hover:text-foreground transition-colors">{q.email}</a>
                    </span>
                  )}
                  {q.address && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {q.address}
                    </span>
                  )}
                </div>
                {q.service_needed && (
                  <div className="flex items-center gap-1.5 text-sm">
                    <Wrench className="w-3.5 h-3.5 text-primary" />
                    <span className="font-medium">{q.service_needed}</span>
                  </div>
                )}
                {q.description && (
                  <p className="text-sm text-muted-foreground bg-secondary/50 rounded-lg p-3">{q.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
