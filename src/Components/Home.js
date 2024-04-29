import React from 'react'
import { useState } from 'react'
import img1 from '../Assests/img1.webp'
import img2 from '../Assests/img2.webp'
import img3 from '../Assests/img3.webp'
import img4 from '../Assests/img4.webp'
import img5 from '../Assests/img5.webp'
import gifImg from '../Assests/pom-bot.gif'
import gifImg1 from '../Assests/gif1.png'
import gifImg2 from '../Assests/gif2.svg'
import Footer from '../Components/Footer';

function Home() {
    const [activeFilter, setActiveFilter] = useState('blogs');

    const handleFilterClick = (filterId) => {
        setActiveFilter(filterId);
    };
    const [showMonthly, setShowMonthly] = useState(false);
    

  return (
    <div className='home-content' id='home'>
        <p className='home-text'>Genoer AI</p>
        <p className='home-text1'>Generate Innovative<br/><span className='spl-text'>AI</span> CODE</p>
        <div className='home-box'>
            <div className='home-input-box'>
                <label>Code</label>
                <input type='text' placeholder='Generate code' className='input-box'/>
            </div>
            <div className='home-input-box'>
                <label>Stable Diffusion</label>
                <input type='text' placeholder='Generate Image' className='input-box'/>
            </div>
            <button> Generate</button>
            

        </div>
        <div className='home-pics'>
            <img src={img1} alt='img-1'/>
            <img src={img2} alt='img-2'/>
            <img src={img3} alt='img-3'/>
            <img src={img4} alt='img-4'/>
            <img src={img5} alt='img-5'/>
        </div>
        <div className='home-box1'>
            <button className='grad-btn'>AI Intelligent</button>
            <p className='home-text1' style={{marginBottom:"30px"}}> New Intelligent AI <br/>Assistent.</p>
            <div style={{display:"flex",justifyContent:"space-evenly"}} className='home-box1-div1'>
                <p className='home-text'>
                Select an AI Platform and Input some basic information about <br/>your idea, brand, product, or service, and the AI would generate
                <br/>a unique, engaging piece of content in seconds.
                </p>
                <button className='grad-btn'>Explore <br/>More AI</button>
            </div>
            
        </div>
        <div className='home-box2'>
            <div className='home-box21'>
                <img src={gifImg} alt='gif1' className='home-box21-gif'/>
                <button className='grad-btn home-box21-btn'>Write Templates</button>
                <p className='home-text1 home-box21-text'> Social Life Made Easier</p>
            </div>
            <div className='home-box22'>
            <div className='home-filters'>
                <a href='#blogs' onClick={() => handleFilterClick('blogs')} className={activeFilter === 'blogs' ? 'active' : ''}>Blogs</a>
                <a href='#ecommerce' onClick={() => handleFilterClick('ecommerce')} className={activeFilter === 'ecommerce' ? 'active' : ''}>Ecommerce</a>
                <a href='#development' onClick={() => handleFilterClick('development')} className={activeFilter === 'development' ? 'active' : ''}>Development</a>
                <a href='#advertisement' onClick={() => handleFilterClick('advertisement')} className={activeFilter === 'advertisement' ? 'active' : ''}>Advertisement</a>
                <a href='#custom' onClick={() => handleFilterClick('custom')} className={activeFilter === 'custom' ? 'active' : ''}>Custom</a>
                <a href='#socialmedia' onClick={() => handleFilterClick('socialmedia')} className={activeFilter === 'socialmedia' ? 'active' : ''}>Social media</a>
                <a href='#voice' onClick={() => handleFilterClick('voice')} className={activeFilter === 'voice' ? 'active' : ''}>Voice</a>
            </div>
                <div className='home-filter-content'>
                    <div id='blogs' className='content-item' style={{ display: activeFilter === 'blogs' ? 'block' : 'none' }}>
                        <div className='home-grid1-container'>
                            <div className='home-grid1-item '>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-h"></i></a>
                                <h5>Post Title Generator</h5>
                                <p>Get captivating post titles instantly with our title generator. Boost engagement and save time.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-brands fa-stack-overflow"></i></a>
                                <h5>Summarize Text</h5>
                                <p>Effortlessly condense large text into shorter summaries. Save time and increase productivity.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-newspaper"></i></a>
                                <h5>Article Generator</h5>
                                <p>Instantly create unique articles on any topic. Boost engagement, improve SEO, and save time.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-file-import"></i></a>
                                <h5>Blog Section</h5>
                                <p>Effortlessly create blog sections with AI. Get unique, engaging content and save time.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-brands fa-canadian-maple-leaf"></i></a>
                                <h5>Blog Post Ideas</h5>
                                <p>Unlock your creativity with unique blog post ideas. Generate endless inspiration and take your content to the next level.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-brands fa-blogger"></i></a>
                                <h5>Blog Intros</h5>
                                <p>Set the tone for your blog post with captivating intros. Grab readers attention and keep them engaged.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-check-double"></i></a>
                                <h5>Blog Conclusion</h5>
                                <p>End your blog posts on a high note. Craft memorable conclusions that leave a lasting impact.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-angles-down"></i></a>
                                <h5>Paragraph Generator</h5>
                                <p>Generate a paragraph with keywords and description. Never struggle with writer's block again. Generate flawless paragraphs that captivate readers.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-arrow-up-a-z"></i></a>
                                <h5>Grammar Correction</h5>
                                <p>Eliminate grammar errors and enhance your writing with ease. Our tool offers seamless grammar correction for flawless content.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-blog"></i></a>
                                <h5>TL;DR Summarization</h5>
                                <p>Automatically summarize long texts into bite-sized summaries with this TL;DR generator.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-v"></i></a>
                                <h5>AI Speech to Text</h5>
                                <p>The AI app that turns audio speech into text with ease.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-file-pdf"></i></a>
                                <h5>AI Article Wizard Generator</h5>
                                <p>Create custom article instantly with our article wizard generator. Boost engagement and save time.description1</p>
                            </div>

                        </div>
                    </div>
                    <div id='ecommerce' className='content-item' style={{ display: activeFilter === 'ecommerce' ? 'block' : 'none' }}>
                    <div className='home-grid1-container'>
                            <div className='home-grid1-item '>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-file"></i></a>
                                <h5>Product Description</h5>
                                <p>Easily create compelling product descriptions that sell. Increase conversions and boost sales.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-indent"></i></a>
                                <h5>Product Name Generator</h5>
                                <p>Create catchy product names with ease. Attract customers and boost sales effortlessly.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-star"></i></a>
                                <h5>Testimonial Review</h5>
                                <p>Instantly generate authentic testimonials. Build trust and credibility with genuine reviews.</p>
                            </div>
                        </div>
                    </div>
                    <div id='development' className='content-item' style={{ display: activeFilter === 'development' ? 'block' : 'none' }}>
                    <div className='home-grid1-container'>
                            <div className='home-grid1-item '>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-file"></i></a>
                                <h5>Problem Agitate Solution</h5>
                                <p>Identify and solve problems efficiently. Streamline solutions and increase productivity.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-indent"></i></a>
                                <h5>Pros & Cons</h5>
                                <p>Make informed decisions with ease. Generate unbiased pros and cons lists that help you weigh options and make better choices.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-star"></i></a>
                                <h5>Meta Description</h5>
                                <p>Get more clicks with compelling meta descriptions. Generate unique, SEO-friendly meta descriptions that attract customers and boost traffic.</p>
                            </div>
                            <div className='home-grid1-item '>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-file"></i></a>
                                <h5>FAQ Generator (All Datas)</h5>
                                <p>Quickly create helpful FAQs. Our AI-powered generator provides custom responses to common questions in seconds.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-indent"></i></a>
                                <h5>AI Image Generator</h5>
                                <p>Create stunning images in seconds.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-star"></i></a>
                                <h5>AI Code Generator</h5>
                                <p>Create custom code in seconds! Leverage our state-of-the-art AI technology to quickly and easily generate code in any language.</p>
                            </div>
                        
                    </div>
                    </div>
                    <div id='advertisement' className='content-item' style={{ display: activeFilter === 'advertisement' ? 'block' : 'none' }}>
                        <div className='home-grid1-container'>
                            <div className='home-grid1-item '>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-brands fa-facebook"></i></a>
                                <h5>Facebook Ads</h5>
                                <p> Create high-converting Facebook ads that grab attention. Drive sales and grow your business.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-brands fa-adversal"></i></a>
                                <h5>Google Ads Headlines</h5>
                                <p>Create high-converting Google ads with captivating headlines. Generate unique, clickable ads that drive traffic and boost sales.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-shapes"></i></a>
                                <h5>Google Ads Description</h5>
                                <p>Step up your Google ad game, Craft high-converting ad copy that grabs attention and drives sales.</p>
                            </div>
                        </div>
                    </div>
                    <div id='custom' className='content-item' style={{ display: activeFilter === 'custom' ? 'block' : 'none' }}>
                        <div className='home-grid1-container'>
                            <div className='home-grid1-item '>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-file"></i></a>
                                <h5>Custom Generation</h5>
                                <p>Create your own custom generator with AI! Our app allows you to quickly and easily generate unique content in any language.</p>
                            </div>
                        </div>
                    </div>
                    <div id='socialmedia' className='content-item' style={{ display: activeFilter === 'socialmedia' ? 'block' : 'none' }}>
                        <div className='home-grid1-container'>
                        <div className='home-grid1-item '>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-brands fa-youtube"></i></a>
                                <h5>Youtube Video Description</h5>
                                <p> Elevate your YouTube content with compelling video descriptions. Generate engaging descriptions effortlessly and increase views.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-brands fa-square-youtube"></i></a>
                                <h5>Youtube Video Title</h5>
                                <p>Get more views with attention-grabbing video titles. Create unique, catchy titles that entice viewers.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-brands fa-youtube"></i></a>
                                <h5>Youtube Video Tag</h5>
                                <p>Improve your YouTube video's discoverability with relevant video tags. Boost views and engagement.</p>
                            </div>
                            <div className='home-grid1-item '>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-brands fa-instagram"></i></a>
                                <h5>Instagram Captions</h5>
                                <p>Elevate your Instagram game with captivating captions. Generate unique captions that engage followers and increase your reach.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-hashtag"></i></a>
                                <h5>Instagram Hashtags</h5>
                                <p>Boost your Instagram reach with relevant hashtags. Generate optimal, trending hashtags and increase your visibility.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-people-line"></i></a>
                                <h5>Social Media Post Tweet</h5>
                                <p>Make an impact with every tweet. Generate attention-grabbing social media posts and increase engagement.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-share-nodes"></i></a>
                                <h5>Social Media Post Business</h5>
                                <p>Generate a text for your business social media networks. Maximize your social media presence with impactful business posts.</p>
                            </div>
                            <div className='home-grid1-item'>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-brands fa-facebook"></i></a>
                                <h5>Facebook Headlines</h5>
                                <p>Get noticed with attention-grabbing Facebook headlines. Generate unique, clickable headlines that increase engagement and drive traffic.</p>
                            </div>
                        </div>
                    </div>
                    <div id='voice' className='content-item' style={{ display: activeFilter === 'voice' ? 'block' : 'none' }}>
                        <div className='home-grid1-container'>
                            <div className='home-grid1-item '>
                                <a href='#icon' className='home-grid1-icon-link'><i class="fa-solid fa-headphones"></i></a>
                                <h5>AI Voiceover</h5>
                                <p> The AI app that turns text into audio speech with ease. Get ready to generate custom audios from texts quickly and accurately.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='home-box3'>
            <button className='grad-btn'>AI advisor</button>
            <h1 className='home-text2'>More professional<br/> in same place</h1>
                <div className='home-grid2-container'>
                        <div className='home-grid2-item '>
                            <a href='#icon' className='home-grid2-icon-link'><i class="fa-brands fa-servicestack"></i></a>
                            <h3 className='home-text1' style={{marginBottom:"10px"}}>Voiceover</h3>
                            <p style={{fontSize:"20px",margin:"5px"}}>30+ more Languages</p>
                            <p> Ability to understand and generate content in different languages allows businesses to expand their reach and appeal to a wider audience.</p>
                        </div>
                        <div className='home-grid2-item ' style={{display:"flex",justifyContent:"space-around", alignItems:"center",border:"none"}}>
                            <img src={gifImg1} alt='img'/>
                            <h1>English</h1>
                        </div>
                        <div className='home-grid2-item ' style={{display:"flex",justifyContent:"space-around", alignItems:"center",border:"none"}}>
                            <img src={gifImg2} alt='img' style={{height:"200px",width:"200px"}}/>
                        </div>
                        <div className='home-grid2-item '>
                            <a href='#icon' className='home-grid2-icon-link'><i class="fa-solid fa-file-arrow-up"></i></a>
                            <h3 className='home-text1' style={{marginBottom:"10px"}}>Join Partner</h3>
                            <p style={{fontSize:"20px",margin:"5px"}}>Join Partner</p>
                            <p> Securely process credit card or other electronic payment methods by using payment gateways.</p>
                        </div>
                    
                    
                </div>
        </div>
        <div className='home-box4'>
            <h1 className='home-text2'>Affordable Pricing</h1>
            <p className='home-box4-text'>Save up to %20 for a limited time.</p>
            <div className='home-box4-filter'>
                <a href='#monthly' onClick={() => setShowMonthly(true)}>Monthly</a>
                <a href='#yearly' onClick={() => setShowMonthly(false)}>Yearly</a>
            </div>
            <div className='home-box4-filter-content'>
            <div id='monthly' style={{ display: showMonthly ? 'block' : 'none' }}>
                    <div className='home-box4-grid-container'>
                        <div className='home-box4-grid-item'>
                            <p className='home-box4-grid-item-text'>Basic</p>
                            <h1>$29<span style={{fontSize:'22px'}}>/month</span></h1>
                            <p style={{fontSize:"16px",color:"#4d4d4d",fontWeight:"400",marginTop:"20px"}}>The cheapest way to get started.</p>
                            <div>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>300 words</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Limited Use</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Volume Based Pricing</p>
                                <p style={{color:"#9d9d9d"}}><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Analytics and Reporting</p>
                                <p style={{color:"#9d9d9d"}}><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>API Access</p>
                            </div>
                            <button className='grad-btn'>Join This Plan</button>
                        </div>
                        <div className='home-box4-grid-item active-plan'>
                            <p className='home-box4-grid-item-text'>Standard</p>
                            <h1 style={{color:"#fff"}}> $49<span style={{fontSize:'22px'}}>/month</span></h1>
                            <p style={{fontSize:"16px",fontWeight:"400",marginTop:"20px"}}>the most popular plan.</p>
                            <div>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>300 words</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Limited Use</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Volume Based Pricing</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Analytics and Reporting</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>API Access</p>
                            </div>
                            <button >Join This Plan</button>
                        </div>
                        <div className='home-box4-grid-item'>
                            <p className='home-box4-grid-item-text'>Enterprise</p>
                            <h1>$89<span style={{fontSize:'22px'}}>/month</span></h1>
                            <p style={{fontSize:"16px",color:"#4d4d4d",fontWeight:"400",marginTop:"20px"}}>Contact us for more informations.</p>
                            <div>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>300 words</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Limited Use</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Volume Based Pricing</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Analytics and Reporting</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>API Access</p>
                            </div>
                            <button className='grad-btn'>Join This Plan</button>
                        </div>

                    </div>
                </div>
                <div id='yearly' style={{ display: showMonthly ? 'none' : 'block' }}>
                <div className='home-box4-grid-container'>
                        <div className='home-box4-grid-item'>
                            <p className='home-box4-grid-item-text'>Basic</p>
                            <h1>$300<span style={{fontSize:'22px'}}>/year</span></h1>
                            <p style={{fontSize:"16px",color:"#4d4d4d",fontWeight:"400",marginTop:"20px"}}>The cheapest way to get started.</p>
                            <div>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>300 words</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Limited Use</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Volume Based Pricing</p>
                                <p style={{color:"#9d9d9d"}}><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Analytics and Reporting</p>
                                <p style={{color:"#9d9d9d"}}><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>API Access</p>
                            </div>
                            <button className='grad-btn'>Join This Plan</button>
                        </div>
                        <div className='home-box4-grid-item active-plan'>
                            <p className='home-box4-grid-item-text'>Standard</p>
                            <h1 style={{color:"#fff"}}> $569<span style={{fontSize:'22px'}}>/year</span></h1>
                            <p style={{fontSize:"16px",fontWeight:"400",marginTop:"20px"}}>the most popular plan.</p>
                            <div>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>300 words</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Limited Use</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Volume Based Pricing</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Analytics and Reporting</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>API Access</p>
                            </div>
                            <button >Join This Plan</button>
                        </div>
                        <div className='home-box4-grid-item'>
                            <p className='home-box4-grid-item-text'>Enterprise</p>
                            <h1>$999<span style={{fontSize:'22px'}}>/year</span></h1>
                            <p style={{fontSize:"16px",color:"#4d4d4d",fontWeight:"400",marginTop:"20px"}}>Contact us for more informations.</p>
                            <div>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>300 words</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Limited Use</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Volume Based Pricing</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>Analytics and Reporting</p>
                                <p><i class="fa-solid fa-circle-check" style={{marginRight:"30px"}}></i>API Access</p>
                            </div>
                            <button className='grad-btn'>Join This Plan</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className='home-box5'>
            <button className='grad-btn'>JOIN THE WAITLIST</button>
            <h1 className='home-text2'>Supercharge your content <br/>generation process.</h1>
            <p className='home-box4-text'>Join us today and experience the power of AI-powered text<br/> creation for yourself!</p>
            <button className='home-box5-btn'>Start For Free Trail</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Home