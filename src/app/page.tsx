import Link from "next/link";

const Home = async() => {

   await new Promise(resolve => {
     setTimeout(resolve, 2000); // Simulating a delay for demonstration purposes
   })
  return (
    <>
      <h1>Home</h1>


      <Link style={{marginRight: "10px"}} href="/about">About</Link>

      <Link style={{marginRight: "10px"}} href="/blog">Blog</Link>

      <Link href="/products" style={{marginRight: "10px"}}>Products</Link>

      <Link href="/contact " style={{marginRight: "10px"}}>Contact</Link>
      <Link href="/articles/breaking-news-123?lang=en" style={{marginRight: "10px"}}>Read in English</Link>

      <Link href="/articles/breaking-news-1233?lang=fr" style={{marginRight: "10px"}}>Read in French</Link>
    </>
  );
};

export default Home;
