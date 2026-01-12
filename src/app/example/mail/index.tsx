import { Mail } from "@/app/example/mail/components/mail";
import { accounts, mails } from "@/app/example/mail/data";

export default function MailPage() {
  return <Mail accounts={accounts} mails={mails} navCollapsedSize={4} />;
}
