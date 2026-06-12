import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionHeader } from "./SectionHeader";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const EMAILJS_PUBLIC_KEY = "zLdWcW0cjbStgq4DZ";
const EMAILJS_SERVICE_ID = "service_w0aqy5o";
const EMAILJS_TEMPLATE_ID = "template_t21jyqb";


const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      toast.error("Please fix the highlighted fields before sending.");
      return;
    }
    setErrors({});
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: result.data.name,
          from_email: result.data.email,
          message: result.data.message,
          reply_to: result.data.email,
          to_email: "khushiwanve2004@gmail.com",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("EmailJS error:", err);
      let msg = "Failed to send your message. Please try again or email directly at khushiwanve2004@gmail.com";
      if (err?.status === 422) {
        msg = "Service configuration issue. Please email me directly at khushiwanve2004@gmail.com.";
      } else if (err?.status === 0 || err?.status >= 500) {
        msg = "Network or server issue. Please check your connection and try again.";
      } else if (err?.status === 429) {
        msg = "Too many messages sent. Please wait a moment and try again.";
      }
      toast.error(msg, { duration: 6000 });
    } finally {
      setSending(false);
    }
  };


  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader tag="Contact" title="Let's build something" subtitle="Have an opportunity or idea? I'd love to hear from you." />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <InfoRow icon={Mail} label="Email" value="khushiwanve2004@gmail.com" href="mailto:khushiwanve2004@gmail.com" />
            <InfoRow icon={Phone} label="Phone" value="+91 7972308556" href="tel:+917972308556" />
            <InfoRow icon={MapPin} label="Location" value="Nagpur, Maharashtra, India" />
            <div className="flex gap-3 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full glass hover:bg-gradient-brand hover:text-white"><Github className="h-4 w-4" /></a>
              <a href="https://linkedin.com/in/khusheewanve" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full glass hover:bg-gradient-brand hover:text-white"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass-strong space-y-4 rounded-2xl p-6">
            <Field label="Name" error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (errors.name) setErrors((prev) => { const n = { ...prev }; delete n.name; return n; });
                }}
                maxLength={100}
                className={`w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.72_0.2_300/0.6)] ${errors.name ? "border-red-400/70" : "border-white/10"}`}
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  if (errors.email) setErrors((prev) => { const n = { ...prev }; delete n.email; return n; });
                }}
                maxLength={255}
                className={`w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.72_0.2_300/0.6)] ${errors.email ? "border-red-400/70" : "border-white/10"}`}
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Message" error={errors.message}>
              <textarea
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  if (errors.message) setErrors((prev) => { const n = { ...prev }; delete n.message; return n; });
                }}
                rows={5}
                maxLength={1000}
                className={`w-full resize-none rounded-xl border bg-white/[0.04] px-4 py-3 text-sm outline-none transition focus:border-[oklch(0.72_0.2_300/0.6)] ${errors.message ? "border-red-400/70" : "border-white/10"}`}
                placeholder="Tell me about your project or opportunity…"
              />
            </Field>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {sending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:bg-[oklch(1_0_0/0.07)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-mono text-xs text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-xs text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
