import ImageFigma from "../components/portfolio/resource/figma.svg"
import ImageGithub from "../components/portfolio/resource/github.svg"
import ImageEmpty from "../components/portfolio/resource/img.png"
import "../components/portfolio/portfolio.css"

const Portfolio = () =>{
    return(
        <div className={"main-info-block main-portfolio-block"}>
            <div className="portfolio-work-block">
                <img src={ImageEmpty} alt="" className="main-img-work" />
                <div className="portfolio-links">
                    <a className="portfolio-link-github" href="#" target="blank"><img src={ImageGithub} alt="" /></a>
                    <a className="portfolio-link-figma" href="#"  target="blank"><img src={ImageFigma} alt="" /></a>
                </div>
                <div className="portfolio-comments">

                </div>
            </div>
        </div>
    )
}
export default Portfolio