
type OverLay ={
    toggleSidebar : (event: React.MouseEvent<HTMLElement>) => void
}


const Overlay = ({ toggleSidebar } : OverLay ) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 min-h-screen bg-black/20 z-40">
            <div className=" flex-1 h-screen" onClick={toggleSidebar}></div>
        </div>
    )

}

export default Overlay