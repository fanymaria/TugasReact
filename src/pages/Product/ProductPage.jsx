import { useState, useEffect } from 'react'
import getAllProducts from '../../services/getAllProducts'
import CardList from '../../components/CardList/cardlist'
import Navbar from '../../components/Navbar/Navbar'
import RadioButton from '../../components/RadioButton/RadioButton'
const RadioButtonOpts = [

  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Cemilan\ Manis',
    value: 'Cemilan\ Manis'
  },
  {
    label: 'Cemilan\ Pedas',
    value: 'Cemilan\ Pedas'
  },
]
export default function ProductPage() {
  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState(RadioButtonOpts[0].value);
  console.log(selected)
  useEffect(() => {
    let allProducts = getAllProducts()
    allProducts = allProducts || []
    if (selected !== "all") {
      allProducts = allProducts.filter(product => product.category === selected)
    }
    setProducts(allProducts)
  }, [selected])

  return (
    <>
      <Navbar></Navbar>
      <div className='px-24 py-4 gap-4 mt-4 flex-wrap'>
        <h3 className='font-medium'>Filter</h3>
        <div className='flex gap-2 flex-wrap'>
          <RadioButton options={RadioButtonOpts} defaultValue={'all'} selected={selected} setSelected={setSelected} />
        </div>
      </div>
      <section className='container px-24 py-4'>
        <main className='grid grid-cols-4 gap-4'>
          <CardList products={products} />
        </main>

      </section>
    </>

  )
}
