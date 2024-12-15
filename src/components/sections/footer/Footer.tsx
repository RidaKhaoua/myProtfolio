import LinkHref from "@components/ui/anchor/LinkHref";
import { sitemap, socials } from "@constant/constant";
import { List, Logo } from "@components/ui";

function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10 lg:mb-0">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let&apos;s work together today!
            </h2>
            <LinkHref
              className="btn btn-primary"
              href="mailto:ridakh.dev@gmail.com"
              label="Start project"
              icon="chevron_right"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>
              <List
                items={sitemap}
                renderItems={(item) => (
                  <LinkHref
                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-50"
                    href={item.href}
                    label={item.label}
                  />
                )}
              />
            </div>
            <div>
              <p className="mb-2">Socials</p>
              <List
                items={socials}
                renderItems={(item) => (
                  <LinkHref
                    href={item.href}
                    target="_blank"
                    label={item.label}
                    className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-50"
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between gap-3 pt-10 mb-8">
          <LinkHref href="/">
            <Logo />
          </LinkHref>
          <p className="text-zinc-500 text-sm ">
            &copy; 2024 <span className="text-zinc-200">Rida Khaoua</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
