import "../css/main.css"

function Main() {
    return (<>
        <div className="main">
            <div className="pink-box">
                <div className="pink-small-box"></div>
            </div>
            <div className="blue-box">
                <div className="blue-small-box"></div>
            </div>

            <div className="AM">AUTO MUSIC</div>
            <div className="content-text">
                <p>콘텐츠에 어울리는 </p>
                <p>저작권 없는 음악을</p>
                <p>생성하고 추천해 보세요</p>
            </div>
            <div className="MYOM">MAKE YOUR OWN MUSIC.</div>
            <div className="copyright-text">
                <p>자유롭게 저작권 걱정없는</p>
                <p>음악을 생성해 보세요.</p>
            </div>
        </div>
    </>)
}

export default Main;