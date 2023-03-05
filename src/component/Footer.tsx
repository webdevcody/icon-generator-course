import { PrimaryLink } from "./PrimaryLink";

export function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <div className="container mx-auto grid h-24 grid-cols-3 items-center bg-gray-900 text-center">
        <PrimaryLink href="/">IconGenerator.com</PrimaryLink>
        <PrimaryLink href="/privacy-policy">Privacy Policy</PrimaryLink>
        <PrimaryLink href="/terms-of-service">Terms of Service</PrimaryLink>
      </div>
    </footer>
  );
}
