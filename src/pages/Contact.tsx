import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { JsonLd, breadcrumbSchema, personSchema } from "@/components/JsonLd";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import RevealText from "@/components/animations/RevealText";
import { useLang } from "@/i18n/useLang";

const SITE = "https://gatisdesign.com";

const schema = z.object({
  name: z.string().min(2, "min 2"),
  email: z.string().email("invalid"),
  company: z.string().optional(),
  message: z.string().min(10, "min 10"),
  consent: z.literal(true, { errorMap: () => ({ message: "required" }) }),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const { lang, t, pathPrefix } = useLang();
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const meta = lang === "lv"
    ? {
        title: "Kontakti | Gatis Daugavietis",
        desc: "Rakstiet uz gatis@rois.lv vai zvaniet +371 27112163. Atbildu darba dienās 24 stundu laikā.",
      }
    : {
        title: "Contact | Gatis Daugavietis",
        desc: "Email gatis@rois.lv or call +371 27112163. I reply within 24 hours on working days.",
      };

  const breadcrumbs = breadcrumbSchema([
    { name: t.nav.home, url: `${SITE}${pathPrefix}/` },
    {
      name: t.nav.contact,
      url: `${SITE}${pathPrefix === "" ? "/kontakti" : "/en/contact"}`,
    },
  ]);

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      // Form submission via mailto fallback (no backend wired yet)
      const subject = encodeURIComponent(
        `[gatisdesign.com] ${data.name}${data.company ? ` (${data.company})` : ""}`
      );
      const body = encodeURIComponent(
        `${data.message}\n\n--\n${data.name}\n${data.email}${
          data.company ? `\n${data.company}` : ""
        }`
      );
      window.location.href = `mailto:gatis@rois.lv?subject=${subject}&body=${body}`;
      toast.success(t.contact.success);
      setDone(true);
      reset();
    } catch {
      toast.error(t.contact.error);
    } finally {
      setSending(false);
    }
  };

  const consentChecked = watch("consent");

  return (
    <>
      <SEO title={meta.title} description={meta.desc} lastModified="2026-05-17" />
      <JsonLd data={[personSchema, breadcrumbs]} />

      <section className="container-tight py-16 md:py-24">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          {t.nav.contact}
        </p>
        <RevealText
          as="h1"
          className="font-display text-display-2 font-medium leading-[1.0] tracking-tight"
        >
          {t.contact.title}
        </RevealText>

        <FadeInOnScroll delay={0.25}>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
            {t.contact.sub}
          </p>
        </FadeInOnScroll>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          {/* Contact info */}
          <FadeInOnScroll className="md:col-span-5">
            <h2 className="font-display text-sm uppercase tracking-widest text-muted-foreground mb-6">
              {lang === "lv" ? "Tiešie kontakti" : "Reach me directly"}
            </h2>
            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:gatis@rois.lv"
                  className="group flex items-start gap-4"
                >
                  <Mail
                    className="mt-1 text-muted-foreground group-hover:text-primary transition-colors"
                    size={18}
                    aria-hidden="true"
                  />
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      E-pasts
                    </span>
                    <span className="block text-lg font-medium group-hover:text-primary transition-colors">
                      gatis@rois.lv
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+37127112163" className="group flex items-start gap-4">
                  <Phone
                    className="mt-1 text-muted-foreground group-hover:text-primary transition-colors"
                    size={18}
                    aria-hidden="true"
                  />
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {lang === "lv" ? "Telefons" : "Phone"}
                    </span>
                    <span className="block text-lg font-medium group-hover:text-primary transition-colors">
                      +371 27112163
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin
                  className="mt-1 text-muted-foreground"
                  size={18}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {lang === "lv" ? "Atrašanās vieta" : "Location"}
                  </span>
                  <span className="block text-lg font-medium">
                    Rīga, {lang === "lv" ? "Latvija" : "Latvia"}
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-12 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/gatisdaugavietis/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/gatisdesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </FadeInOnScroll>

          {/* Form */}
          <FadeInOnScroll delay={0.15} className="md:col-span-7">
            {done ? (
              <div className="border border-border bg-muted/50 p-8 rounded-sm">
                <p className="font-display text-xl">{t.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label={t.contact.labels.name}
                    error={errors.name?.message}
                  >
                    <input
                      type="text"
                      autoComplete="name"
                      {...register("name")}
                      className="w-full bg-transparent border-b border-border focus:border-primary py-3 outline-none transition-colors"
                    />
                  </Field>
                  <Field
                    label={t.contact.labels.email}
                    error={errors.email?.message}
                  >
                    <input
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      className="w-full bg-transparent border-b border-border focus:border-primary py-3 outline-none transition-colors"
                    />
                  </Field>
                </div>

                <Field
                  label={t.contact.labels.company}
                  error={errors.company?.message}
                >
                  <input
                    type="text"
                    autoComplete="organization"
                    {...register("company")}
                    className="w-full bg-transparent border-b border-border focus:border-primary py-3 outline-none transition-colors"
                  />
                </Field>

                <Field
                  label={t.contact.labels.message}
                  error={errors.message?.message}
                >
                  <textarea
                    rows={5}
                    {...register("message")}
                    className="w-full bg-transparent border-b border-border focus:border-primary py-3 outline-none transition-colors resize-y"
                  />
                </Field>

                <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("consent")}
                    className="mt-1 h-4 w-4 accent-primary"
                  />
                  <span>{t.contact.labels.consent}</span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-destructive">
                    {lang === "lv"
                      ? "Piekrītiet privātuma politikai"
                      : "Please agree to the privacy policy"}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending || !consentChecked}
                  className="inline-flex items-center gap-3 bg-fg text-bg px-7 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {sending ? t.contact.labels.sending : t.contact.labels.submit}
                </button>
              </form>
            )}
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
