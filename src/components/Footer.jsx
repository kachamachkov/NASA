export default function Footer({
    handleToggleModal
}) {
    return (
        <footer>
            <div className="bgGradient"></div>
            <div >
                <h2>
                    NASA - APOD PROJECT
                </h2>
            </div>

            <button onClick={handleToggleModal}>
                <i class="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    );
}