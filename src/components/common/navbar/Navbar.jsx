import Container from "../ui/Container";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <Container classes={"gradient-border !border-x-0 !border-t-0 "}>
      <div className="w-full mx-auto flex items-center justify-center py-[10px] px-[20px] text-center">
        <div className="w-full lg:w-auto inline-flex items-center justify-between gap-6 ">
          <img
            src={logo}
            alt=""
            className="h-20 object-contain max-w-[85%] m-auto"
          />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
