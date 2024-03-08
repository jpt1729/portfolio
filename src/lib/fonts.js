import { Climate_Crisis, Inter, Libre_Barcode_39 } from "next/font/google";
import localFont from 'next/font/local';

export const headingFont = Climate_Crisis({
  subsets: ["latin"],
  weight: "400",
});
export const paragraphFont = localFont({
    src: './fonts/Neue-Regrade-Variable.ttf' 
});
export const barcodeFont = Libre_Barcode_39({
  subsets: ["latin"],
  weight: "400",
});
