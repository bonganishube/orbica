import { Button } from '../ui/button';

function AddToCart({ productId }: { productId: string }) {
  return (
    <Button className='capitalize' size='lg'>
      add to cart
    </Button>
  );
}
export default AddToCart;