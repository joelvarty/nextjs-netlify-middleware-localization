# Localization with Next.js, Netlify and Agility CMS

This is a followup to the article here: https://www.netlify.com/blog/localize-spanish-nextjs-middleware/

This repo shows how to do localization with Agility CMS.

I've setup an Agility instance with a content list called Localized Messages (reference name is `localizedmessages `).  There is a field called Country Code and another called Message.

The middleware.ts file detects the country code of the incoming request and sets in the req.searchParams.

In the index page, we lookup the country code in the `localizedmessages` list from our Agility instance and show it to the user.

Easy peasy!

To get your free Agility account to try this out, click here: https://agilitycms.com/free.  You can use any of the starter templates.

Have questions?  Reach out to us on slack https://agilitycms.com/join-slack

