import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";
import FavoriteToggleForm from "./FavoriteToggleForm";


async function FavoriteToggleButton({ productId }: { productId: string }) {
  const {userId} = auth();
  if (!userId) return <CardSignInButton />
  const favoriteId = await fetchFavoriteId({ productId });
  return (
    <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />
  );
}
export default FavoriteToggleButton;
