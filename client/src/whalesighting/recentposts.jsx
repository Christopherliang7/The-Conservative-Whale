import React from 'react';

function RecentPosts(props) {
  return (
    <>
      <h2> Recent Posts </h2>
      {props.posts.map((post) => {
        return (
          <>
            <div>
              <div><h3>{post.title}</h3></div>
              <div><img src='https://orcawhalewatch.com/wp-content/uploads/2016/03/whale-watching.jpg' alt=''/></div>
              <div><p>{post.description}</p></div>
            </div>
            <br></br>
          </>
        )
      })}
      <div>
        <div><h3>Group of Orca Spotted About a Mile Off the Coast of Bainbridge Island</h3></div>
        <div><img src='https://orcawhalewatch.com/wp-content/uploads/2016/03/whale-watching.jpg' alt=''/></div>
        <div><p>Beautiful creatures coming up for air as they move North towards Kingston. They seem to be enjoying themselves quite well in this beautifully clear water today!</p></div>
      </div>
      <br></br>
      <div>
        <div><h3>Humpback Whale Spotted a Couple Miles From Kingston</h3></div>
        <div><img src='https://pmimaui.com/wp-content/uploads/2018/11/whale-watching-season-maui-1500x609.jpg' alt=''/></div>
        <div><p>Just witnessed a humpback whale lift it's tail out of the water as it dove deep under. What a sight.. #AmazingSights</p></div>
      </div>
      <br></br>
      <div>
        <div><h3>Orca Swimming Right By Our Boat Today </h3></div>
        <div><img src='https://i.ytimg.com/vi/ZC5_1AwCsh4/maxresdefault.jpg' alt=''/></div>
        <div><p>Having a beautiful day of fishing when this beast came right up next to my boat today. Definitely had me in shock. It's not everyday you can see one of them up close!</p></div>
      </div>
      <br></br>
      <div>
        <div><h3>First Encounter with a Minke Whale</h3></div>
        <div><img src='https://fh-sites.imgix.net/sites/1580/2019/11/09021447/Minke-Whale-7233_copyright-Dolphin-Safari.jpg?auto=compress%2Cformat&w=600&fit=max' alt=''/></div>
        <div><p>I've been whale watching all 30 years of my life. Today was the first time I've got to witness a Minke Whale up close. Well.. it was a mile away, but the adenaline from spotting them made it feel just feets away!</p></div>
      </div>
      <br></br>
      <div>
        <div><h3>Orca Spotted About a Mile Off the Coast of Bainbridge Island!</h3></div>
        <div><img src='https://bloximages.chicago2.vip.townnews.com/goskagit.com/content/tncms/assets/v3/editorial/4/0e/40e799fc-c8f9-5e49-aed5-5dc4a440ef51/5cccefdb1f4cb.image.jpg?resize=1200%2C687' alt=''/></div>
        <div><p>Beautiful creature coming up for air as they move North towards Kingston. They seem to be enjoying themselves quite well in this beautifully clear water today!</p></div>
      </div>
      <br></br>
    </>
  )
}

export default RecentPosts;