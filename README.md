# Can I BRAD this?

![screenshot of the Home screen in light mode](https://i.ibb.co/w4qYCDp/Homescreen-screenshot.png)

### Firstly, what even is BRAD?

BRAD stands for Banish Recycling And Disposal Program, started by Banish a company who sell sustainable items as well as share education on sustainability. Everyday Aussies can send in their hard to recycle items, and the team of volunteers will sort and send them through to different waste streams. If you happen to live in Sydney, sign up to come along to a volunteer session to get a more hands on experience and see the behind the scenes of BRAD.

[About BRAD](https://banish.com.au/pages/recycling-program)

### What is 'Can I BRAD this?'

Aimed at beginners, people new to the BRAD program, or anyone needing a refresher, it's a fun game where you have to select whether or not an item can be recycled by BRAD. When you login, your score will save on the scoreboard. While login is optional, I think it's a lot more fun to have it saved and try getting the highest score out of everyone!

## You can play the game [here](https://canibradthis.site/)

![screenshot of the Play screen in dark mode](https://i.ibb.co/rF6QrvF/Play-screen-screenshot.png)

### Inspiration behind the project

I've been a volunteer with Banish for just over 2 years now, sorting through hundreds of BRAD parcels. For my last project in this course, I wanted it to be something that speaks to me and show a bit about who I am. I also hope it'll be beneficial for newbies to BRAD, and increase awareness for the program. The colour story I ended up going with, is one Banish uses for BRAD materials and I felt like it turned out really well! Also coincidentally there's a lot of green and gold, perfect for the current Matildas hype.

### Technologies used

The frontend was built with React, and the backend with Supabase which is something new I learnt for this project. I also went and learnt how to use Chakra UI components, as they have a strong focus on accessibility, and added my own styling to it as well.

### Thoughts

I really wanted this final project to reflect me, and be a good representation of my skills and who I am. I'd like to think I have managed to achieve this. At the very least I am really proud of the work I did, being able to listen to feedback and also taking into consideration how accessible my web app was. It wasn't easy but it was a great learning experience and I will continue to work on it. My favourite part of this all is lowkey the light/dark mode option. I am personally a biiiiig dark mode fan, but not everyone is, so having the option is great. It also just looks soooo vibrant and enticing in dark mode! I have also been writing out more in depth thoughts over on [my website](https://galitmoss.com/) if you'd like to read any of those you can find them under Blogs. Bit of a shameless plug.

### Features

Game itself - an image and item name will show up and you have to select 'yes' or 'no' if you think you can recycle it with BRAD

Scoreboard - for users who choose to login, your score will be saved and rendered on the scoreboard for everyone to see

Login/sessions - set up with Supabase making it super streamlined

### Accessibility Features

Contrast: originally the colour scheme was really different, but once learning the mininmum requirement, that all changed.

Chakra UI: Chakra components are all equipped with a role where necessary
Alt Text: in my table where the Brad Items are stored with images, as well as the other 2 images on the site, there is descriptive alt text available. While I am proud of what I've done for this, I am sure it is potentially not enough for some images.

- need to work on tabbing across in in play it's really annoying, doesn't open any modal components either

### What do I want to do with this project next?

- Update my testing, I will get to this soon. Something I really struggled with and want to improve upon. Had a lot of issues with what I want to test so I'll revist learning it and come back. Definitely should have been working on this sooner than I did.
- The feedback I keep getting, is that there's duplicates. So I need to work that out so everyone stops telling me. The only downside is eventually you will run out of guesses, so maybe a workaround to start over when you do?
- SMTP setup on Supabase to fix issues with how many Magic Codes can be sent to users logging in per hour
- Mobile phone responsiveness, this is an area I continue to struggle with and I know Chakra has good support for doing this so more to learn here
