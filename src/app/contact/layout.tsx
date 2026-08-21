import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact Spacio Workspace | Basavanagudi, Bangalore",
  description:
    "Call, WhatsApp or visit Spacio Workspace at No 7, Sree Devi Complex, NAT Street, Basavanagudi, Bangalore 560004.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
