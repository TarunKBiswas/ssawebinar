import AppMClass from "./layouts/appmasterclass/AppMClass";
import DropShipping from "./layouts/dropshipping/DropShipping";
import SellCourse from "./layouts/sellcourses/SellCourse";
import SellProduct from "./layouts/sellproduct/SellProduct";
import WhatsApp from "./layouts/whatsapp/WhatsApp";

function App() {
  let domain = window.location.pathname.split("/")[1];

  return (
    <>
      {(domain === "" && <DropShipping />) ||
        (domain === "dropshipping" && <DropShipping />) ||
        (domain === "whatsapp_marketing" && <WhatsApp />) ||
        (domain === "appmasterclass" && <AppMClass />) ||
        (domain === "courseselling" && <SellCourse />) ||
        (domain === "productselling" && <SellProduct />)}
    </>
  );
}

export default App;
