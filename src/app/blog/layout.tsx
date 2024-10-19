import Container from "@/components/Container";
import { MainNav } from "@/components/main-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="">
        <Container>
          <MainNav />
        </Container>
      </div>
      {children}
    </>
  );
}
