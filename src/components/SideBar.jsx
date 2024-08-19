export default function SideBar({
    handleToggleModal
}) {
    return (
        <div className="sideBar">
            <div className="bgOverlay" onClick={handleToggleModal}></div>
            <div className="sideBarContents">

                <h2>Image's title</h2>

                <div>
                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eos error vitae eum eius. Reiciendis, accusantium. Nihil consectetur odio perspiciatis.</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}