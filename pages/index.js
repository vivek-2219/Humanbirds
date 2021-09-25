import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="logo"><img src="/logo.png" alt="Error Loading" /></div>
      <div className="container">
        <div className="upperContent">
          <ul>
            <li><h1>There Are <b>93,178</b> Postings Here For You!</h1></li>
          </ul>
          <ul>Find jobs, employment and career opportunities.</ul>
          <ul>
            <li><input type="search" name="" id="" placeholder="job title, keywords..." /></li>
            <li>
              <select name="" id="">
                <option value="lorem">City or postcode</option>
              </select>
            </li>
            <li><div className="btn"><a href="/"><div className="btn-primary">Find Jobs</div></a></div></li>
          </ul>
          <ul><li>Popular searches : <a href="/">Designer</a>,<a href="/">Developer</a>,<a href="/">Web</a>,<a href="/">IOS</a>,<a href="/">PHP</a>,<a href="/">Senior Engineer</a>...</li></ul>
        </div>
        <div className="jobButtons">
          <div className="looking">
            <a href="/"><button><h1>LOOKING</h1><h2>FOR JOB?</h2></button></a>
            <p>SEARCH BEST JOBS FOR YOURSELF</p>
          </div>
          <div className="hiring">
            <a href="/"><button><h1>LOOKING</h1><h2>TO HIRE?</h2></button></a>
            <p>HIRE THE PERFECT ONE FOR YOURSELF</p>
          </div>
        </div>
        <div className="lowerImage"><img src="/rec5.png" alt="Error Loading" /></div>
      </div>

      <div className="middleContent">
        <div className="jobCategories">
          <ul className="heading">
            <li><h1>Popular Job Categories</h1></li>
            <li><p>2020 jobs live - 293 added today</p></li>
          </ul>
          <ul className="middleBody">
            <ul className="boxes">
              <li><a href="/"><h2>Accounting / Finance</h2><h4>(1 open position)</h4></a></li>
              <li><a href="/"><h2>Marketing</h2><h4>(5 open position)</h4></a></li>
              <li><a href="/"><h2>Design</h2><h4>(7 open position)</h4></a></li>
            </ul>
            <ul className="boxes">
              <li><a href="/"><h2>Development</h2><h4>(6 open position)</h4></a></li>
              <li><a href="/"><h2>Human Resource</h2><h4>(0 open position)</h4></a></li>
              <li><a href="/"><h2>Project Management</h2><h4>(1 open position)</h4></a></li>
            </ul>
            <ul className="boxes">
              <li><a href="/"><h2>Customer Service</h2><h4>(4 open position)</h4></a></li>
              <li><a href="/"><h2>Health and Care</h2><h4>(3 open position)</h4></a></li>
              <li><a href="/"><h2>Automative jobs</h2><h4>(1 open position)</h4></a></li>
            </ul>
          </ul>
        </div>
        <div className="featuredJobs">
          <ul className="heading">
            <li><h1>Featured Jobs</h1></li>
            <li><p>Know your worth and find the job that qualify your life</p></li>
          </ul>
          <section>
            <ul className="blocks">
              <li><h2>Junior Graphic Designer</h2><a href="/"><span>Featured</span></a></li>
              <li><p><a href="/">Design</a></p><p><a href="/">New York</a></p><p><a href="/">150 - 180 per week</a></p></li>
              <li><a href="/" className="blue">Full time</a><a href="/" className="yellow">Urgent</a></li>
            </ul>
            <ul className="blocks">
              <li><h2>Junior Graphic Designer</h2><a href="/"><span>Featured</span></a></li>
              <li><p><a href="/">Design</a></p><p><a href="/">New York</a></p><p><a href="/">150 - 180 per week</a></p></li>
              <li><a href="/" className="blue">Full time</a><a href="/" className="yellow">Urgent</a></li>
            </ul>
          </section>
          <section>
            <ul className="blocks">
              <li><h2>Junior Graphic Designer</h2><a href="/"><span>Featured</span></a></li>
              <li><p><a href="/">Design</a></p><p><a href="/">New York</a></p><p><a href="/">150 - 180 per week</a></p></li>
              <li><a href="/" className="blue">Full time</a><a href="/" className="yellow">Urgent</a></li>
            </ul>
            <ul className="blocks">
              <li><h2>Junior Graphic Designer</h2><a href="/"><span>Featured</span></a></li>
              <li><p><a href="/">Design</a></p><p><a href="/">New York</a></p><p><a href="/">150 - 180 per week</a></p></li>
              <li><a href="/" className="blue">Full time</a><a href="/" className="yellow">Urgent</a></li>
            </ul>
          </section>
          <section>
            <ul className="blocks">
              <li><h2>Junior Graphic Designer</h2><a href="/"><span>Featured</span></a></li>
              <li><p><a href="/">Design</a></p><p><a href="/">New York</a></p><p><a href="/">150 - 180 per week</a></p></li>
              <li><a href="/" className="blue">Full time</a><a href="/" className="yellow">Urgent</a></li>
            </ul>
            <ul className="blocks">
              <li><h2>Junior Graphic Designer</h2><a href="/"><span>Featured</span></a></li>
              <li><p><a href="/">Design</a></p><p><a href="/">New York</a></p><p><a href="/">150 - 180 per week</a></p></li>
              <li><a href="/" className="blue">Full time</a><a href="/" className="yellow">Urgent</a></li>
            </ul>
          </section>
          <ul>
            <li className="featuredJobButton btn"><a href="/"><div className="btn-primary">Load more listing</div></a></li>
          </ul>
        </div>
        <div className="testimonials">
          <ul className="heading">
            <li><h1>Testimonials From Our Customers</h1></li>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quidem ad natus.</p></li>
          </ul>
          <ul className="cards">
            <section>
              <li><h2>Awesome Design</h2></li>
              <li><p>Without jobHunts, I'd be homeless, they found me a job and got me sorted out quickly with everything! Can't quite... The Mitech team works really hard to ensure high level of quality.</p></li>
              <li className="candidate">
                <img src="/" alt="Error Loading" />
                <h3>Ashley Jenkins<p>Designer</p></h3>
              </li>
            </section>
            <section>
              <li><h2>Awesome Design</h2></li>
              <li><p>Without jobHunts, I'd be homeless, they found me a job and got me sorted out quickly with everything! Can't quite... The Mitech team works really hard to ensure high level of quality.</p></li>
              <li className="candidate">
                <img src="/" alt="Error Loading" />
                <h3>Ashley Jenkins<p>Designer</p></h3>
              </li>
            </section>
            <section>
              <li><h2>Awesome Design</h2></li>
              <li><p>Without jobHunts, I'd be homeless, they found me a job and got me sorted out quickly with everything! Can't quite... The Mitech team works really hard to ensure high level of quality.</p></li>
              <li className="candidate">
                <img src="/" alt="Error Loading" />
                <h3>Ashley Jenkins<p>Designer</p></h3>
              </li>
            </section>
          </ul>
        </div>

        <div className="sponsors">
          <ul>
            <li><a href="/"><h1>Amazon</h1></a></li>
            <li><a href="/"><h1>Airbnb</h1></a></li>
            <li><a href="/"><h1>Slack</h1></a></li>
            <li><a href="/"><h1>Paypal</h1></a></li>
            <li><a href="/"><h1>Spotify</h1></a></li>
            <li><a href="/"><h1>Amazon</h1></a></li>
            <li><a href="/"><h1>Figma</h1></a></li>
          </ul>
        </div>

        <div className="lowerContent">
          <div className="firstBox">
            <section>
              <ul>
                <img src="" alt="Error Loading" />
              </ul>
            </section>
            <section>
              <ul>
                <li><h1>Millions of jobs. Find the one that suits you.</h1></li>
                <li><p>Search all the open positions on the web. Get your own personalised salary estimate. Read reviews on over 600,000 companies worldwide.</p></li>
                <li>
                  <h4>Bring to the table win-win survival.</h4>
                  <h4>Capitalize on low hanging fruit to identify.</h4>
                  <h4>But I must explain to you how all this.</h4>
                </li>
              </ul>
              <ul className="lowerButton btn"><a href="/"><div className="btn-primary">Get started</div></a></ul>
            </section>
          </div>
          <div className="reaches">
            <span>
              <h1>4M</h1>
              <p>4 million daily active users</p>
            </span>
            <span>
              <h1>12k</h1>
              <p>Over 12k open job positions</p>
            </span>
            <span>
              <h1>20M</h1>
              <p>Over 20 million stories shared</p>
            </span>
          </div>
          <div className="news">
            <ul className="heading">
              <li><h1>Recent News Articles</h1></li>
              <li><p>Fresh job related news content posted each day</p></li>
            </ul>
            <div className="articles">
              <div className="feed">
                <ul>
                  <li>April 28, 2021</li>
                  <li>Education</li>
                  <li>1 Comment</li>
                </ul>
                <ul><h3>Attract Sales and Profits</h3></ul>
                <ul><p>A job ravenously while far much that one rank beheld after outside...</p></ul>
                <ul><a href="">Read More</a></ul>
              </div>
              <div className="feed">
                <ul>
                  <img src="" alt="Error Loading" />
                </ul>
                <ul>
                  <li>April 28, 2021</li>
                  <li>Education</li>
                  <li>1 Comment</li>
                </ul>
                <ul><h3>Attract Sales and Profits</h3></ul>
                <ul><p>A job ravenously while far much that one rank beheld after outside...</p></ul>
                <ul><a href="">Read More</a></ul>
              </div>
              <div className="feed">
                <ul>
                  <img src="" alt="Error Loading" />
                </ul>
                <ul>
                  <li>April 28, 2021</li>
                  <li>Education</li>
                  <li>1 Comment</li>
                </ul>
                <ul><h3>Attract Sales and Profits</h3></ul>
                <ul><p>A job ravenously while far much that one rank beheld after outside...</p></ul>
                <ul><a href="">Read More</a></ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pre-footer">
          <li><h1>Recruiting?</h1></li>
          <li><p>Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</p></li>
          <li><div className="btn"><a href="/"><div className="btn-primary">Start Recruiting Now</div></a></div></li>
        </div>
      </div>
      <Footer />
    </>
  )
}
