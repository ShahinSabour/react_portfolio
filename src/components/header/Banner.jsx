import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

export default function Banner(){

    return (
        <div className="main">
            <div className="container mx-auto banner">
                <div className="grid lg:grid-cols-2 lg:gap-4 grid-cols-1 gap-0">
                    <LeftBanner />
                    <RightBanner />
                </div>
            </div>
        </div>
    )
}