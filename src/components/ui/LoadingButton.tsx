import { Loader2 } from "lucide-react";
import { Button } from "./button";


const LoadingButton = () => {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loading
    </Button>
  );
};

export default LoadingButton;