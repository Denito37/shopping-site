import Item from './components/item'

export default async function Home() {
  const data = await getData()

  const products = data.map(product =>{
    return <Item key={product.id} data={product} />
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl'>
      {products}
      </div>
    </main>
  )
}

 async function getData(){
  const res = await fetch('https://fakestoreapi.com/products?limit=16');

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}