import { Navbar} from '@components/common'

const Layout: React.FC<Props> = ({
    children,
    pageProps: { categories = [], ...pageProps },
  }) => {
    const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
    const { locale = 'en-US' } = useRouter()
    const navBarlinks = categories.slice(0, 2).map((c) => ({
      label: c.name,
      href: `/search/${c.slug}`,
    }))
  
    return (
      <CommerceProvider locale={locale}>
        <div className={cn(s.root)}>
          <Navbar links={navBarlinks} />
          <main className="fit">{children}</main>
          <Footer pages={pageProps.pages} />
          <ModalUI />
          <CheckoutProvider>
            <SidebarUI links={navBarlinks} />
          </CheckoutProvider>
          <FeatureBar
            title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
            hide={acceptedCookies}
            action={
              <Button className="mx-5" onClick={() => onAcceptCookies()}>
                Accept cookies
              </Button>
            }
          />
        </div>
      </CommerceProvider>
    )
  }


export default Layout
