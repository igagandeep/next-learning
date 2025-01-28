
async function Product({params}:  {params: Promise<{productId: string}>}) {
    const productId = (await params).productId
  return <div>Product Details {productId}</div>;
}

export default Product;
