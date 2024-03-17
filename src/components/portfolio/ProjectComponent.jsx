import ImageEmpty from "./resource/img1.png";
import ImageGithub from "./resource/github.svg";
import ImageFigma from "./resource/figma.svg";

const Project = () =>{
    return (
        <div className="portfolio-work-block ">
            <img src={ImageEmpty} alt="" className="main-img-work"/>
            <div className="portfolio-links">
                <a className="portfolio-link-github" href="#" target="blank"><img src={ImageGithub}
                                                                                  alt=""/></a>
                <a className="portfolio-link-figma" href="#" target="blank"><img src={ImageFigma}
                                                                                 alt=""/></a>
            </div>
            <div className="portfolio-comments">
                <div className={"comments"}>
                    <div className={"portfolio-user-comment"}>
                        <span><h2>Anonymous</h2><small>DATE_STAMP</small></span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, culpa
                            cumque
                            doloremque eaque enim error eveniet facere, ipsa nam nostrum numquam
                            optio quam
                            quia
                            rem repudiandae sed tempora. Cum deserunt mollitia nam nulla pariatur
                            voluptates.
                        </p>
                    </div>

                    <div className={"portfolio-user-comment"}>
                        <span><h2>Anonymous</h2><small>DATE_STAMP</small></span>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className={"portfolio-comments-controls"}>
                    <input type="text"/>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Project