import { Mail } from "@/app/example-ui/mail/components/mail";
import { accounts, mails } from "@/app/example-ui/mail/data";

export default function MailPage() {
  return <Mail accounts={accounts} mails={mails} navCollapsedSize={4} />;
}
