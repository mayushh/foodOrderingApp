import {useEffect, useState} from 'react';
// in this accordion we are trying to understand a concept that is state uplifting
const Section = ({title,description,isVisible,setIsVisible})=>{
    const [name, setName] = useState("show");
    const desVisibility = () =>{
        isVisible ? setIsVisible(false):setIsVisible(true)
    }
    const buttonName = () =>{
        isVisible? setName("show"):setName("hide")
    }
   
    
    return(
        <div>
            <p className="border border-blue-400 font-bold text-2xl p-2 m-5">{title}</p>
            <button className='border border-blue-400 font-bold text-lg pl-2 ml-5' onClick={()=>{desVisibility(); buttonName() }}>{name}</button>
            { isVisible && <p className="border border-blue-400 p-2 m-5">{description}</p>}
            {}
        </div>
       
    )

}
const shoppee = ()=>{
    const [isVisibleSection, setIsvisibleSection] = useState("null")
   
    return (
        <div>
        <h1 className="font-bold ">SHOPPEE</h1>
        
        <Section title = {<p>about</p>} description = {<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ipsa laborum quisquam! Ipsa cupiditate, ut, sint in tempora impedit reprehenderit dolorum cumque accusamus unde voluptatem! Deleniti, veritatis exercitationem? Sequi amet a corrupti veniam hic! Corporis, ex. Odit itaque quibusdam numquam optio exercitationem sint dolorem explicabo eaque ad cumque harum ullam pariatur tempore, dignissimos molestiae odio, amet beatae possimus alias, voluptate ducimus quas magnam! Possimus, architecto! Molestiae praesentium amet facilis magnam! Quia minus officia quisquam quaerat quod, consequuntur autem, architecto quas dolores blanditiis consectetur? Nisi iure similique pariatur. Maxime doloremque quidem, quas commodi ratione fugiat in eum, voluptates recusandae eius odit?</p>} 
        isVisible={isVisibleSection==="about"} setIsVisible={()=>{isVisibleSection!="about" ? setIsvisibleSection("about"): setIsvisibleSection("null")}} />
        <Section title = {<p>team </p>} description = {<p>this is description of how to use it Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis asperiores facere voluptatum sed dolorum debitis perspiciatis, distinctio non repellat eum possimus culpa. Iure natus nisi facere deleniti quia rem, laboriosam eum obcaecati vel. Illum nihil numquam autem sed optio velit libero hic, non impedit nobis provident incidunt cumque sunt soluta, tempore odit. Placeat maxime iusto dolores nobis sunt magnam odio. </p>} 
        isVisible={isVisibleSection==="team"} setIsVisible={()=>{isVisibleSection!="team" ? setIsvisibleSection("team"): setIsvisibleSection("null")}}/>
        <Section title = {<p>personal </p>} description = {<p>this is description of how to use it Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis asperiores facere voluptatum sed dolorum debitis perspiciatis, distinctio non repellat eum possimus culpa. Iure natus nisi facere deleniti quia rem, laboriosam eum obcaecati vel. Illum nihil numquam autem sed optio velit libero hic, non impedit nobis provident incidunt cumque sunt soluta, tempore odit. Placeat maxime iusto dolores nobis sunt magnam odio. </p>} 
        isVisible={isVisibleSection==="personal"} setIsVisible={()=>{isVisibleSection!="personal" ? setIsvisibleSection("personal"): setIsvisibleSection("null")}}/>
        </div>
    )
}
export default shoppee