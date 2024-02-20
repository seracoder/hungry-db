import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

export const SkeletonCard = () => {
    return (
        <>
            <div className="card bg-base-100 shadow-xl rounded-xl w-auto">
                <div className="skeleton h-60 w-full"></div>
                <div className="card-body">
                    <div className="badge badge-secondary skeleton w-20"></div>
                    <div className="skeleton h-4 w-36"></div>
                </div>
            </div>
        </>
    )
}