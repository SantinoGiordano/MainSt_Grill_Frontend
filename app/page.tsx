import Link from "next/link";
import Nav from "./components/Nav";


export default function Home() {
  return (
    <>
      <div>
        <Nav/>
      </div>
      <div>
        <Link
          href="https://order.online/store/main-street-deli-restaurant-&-catering-agawam-25125723/?hideModal=true&pickup=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order Online 
        </Link>
      </div>
    </>
  );
}
