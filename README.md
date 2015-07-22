# PassworK

Managing passwords could be a disaster. People are not so good at remembering things, so they tend to use the same passwords or patterns on all the websites they login. Once one site get compromised and their passwords expose, users' identity on other sites could be affected.

And that's where PassworK gets in, putting a little extra work over your password, to generate a robust new one ;)

## Concept

The concept of PassworK is simple: Use your input as a key, and use hash algorithm to generate a fixed length password.

The key will be combined by two parts, one is your primary password, which only you know it and no one else knows, and the other part is something related to the website, which will varies from one to one.

As the hash result will be a human unreadable string with letters and numbers, it will be perfect to be used as a strong password.

## Usage

For example, if you choose "MyPassworK" as your primary password, and the name of the website you are going to use on as the variation, then you can get following result:

    MyPassworK + facebook → fCb5ADZh2pQpK5Lq
    MyPassworK + twitter → HZrqB6YYBBdW98GC
    MyPassworK + google → HUL17S6dePbyriCQ
    ...

And the good news is, from now on, all you need to know is the primary password, and the website you are going to login :)

### Advancing Usage

Since PassworK only do the hash work, it is more important that you setup the rules for the inputs.

For example, almost the same as the above, but you change your primary password to "MyPassw0rk" (change letter o to number 0), and capitalize the second letter of the website, the result will be totally different:

    MyPassw0rK + fAcebook → M7WS5L54G6QK97F6
    MyPassw0rK + tWitter → XMYCxGcEarF3sCQR
    MyPassw0rK + gOogle → SwyqE4UMuMf6oTPR
    ...

Just remember, you are the king to your passwords, you make up the rules and follow them.

## FAQ

### What does PassworK stand for?

PassworK could be thought of the combination of password and work, which as what it does, doing a little extra work over your password. Or you can think it comes from the word Password but replaced the last letter by K, which implies a Key to generate your password.

### Why should I use PassworK?
I have seen so many people use their names, birthdays and phone numbers as passwords, which is quite easy to guess once the attacker know about your information. If you have your own ways to create strong passwords you are probably fine, otherwise PassworK might worth a try.

### Is PassworK safe?

Safety is relative, depending on how you look at it. If you use passwords like _19840214_ or _iloveapple_ which can be easily remembered at a glance,  then the passwords generated by PassworK will be a lot safer.

On the other hand, if other people know the way how you use PassworK, they might be able to get the same password out. But this is not different than hackers trying your password on other sites once they get one of your password.

You still need to be careful to make up the rules you use on PassworK.

### How are the passwords generated?

Simple answer: PassworK uses hash algorithm to generate a string, and uses part of it as the password.

More detail: PassworK is inspired by [brainwallet](https://brainwallet.org/), use the text you input as a passphrase, then create a key pair using [bitcore](https://github.com/bitpay/bitcore) Bitcoin library, from that a Bitcoin address will be generated, and the characters from 2 to 17 will be used as your password.

And you can find out more about Bitcoin address from the [Wiki page](https://en.bitcoin.it/wiki/Address) if you doubt about the password will be random enough.

### Why does PassworK use Bitcoin related stuffs?

The original idea is once a password is generated, the corresponding Bitcoin address will be checked, and a warning will be given out if the address has transaction info, as it means someone else has generated the same address and used it before.

This feature is under development though. It might not be so accurate, but it could be a good indication of your passwords' security.  

### How to set different passwords for the same site?

Simply add something markable as part of the variation then it will just work fine. For example, you can add IDs to make passwords for different accounts
on twitter:

    alice@twitter
    bob@twitter
    caren@twitter

Or for the same account but add season as postfix because you prefer to change every few months:

    twitter_in_spring
    twitter_in_summer
    twitter_in_fall
    twitter_in_winter

The examples above just demonstrates how PassworK works in a simple way, but it is YOU to set up the rules to make your passwords.

Also, since PassworK can accept a long sentence with spaces. you can use a long text as your primary password and variation as well. Use it wisely.

### How can I trust PassworK?

Earning trust is never easy, that's why PassworK is open source and let the public examine.

If you don't trust PassworK yet, you can check the generated password on [brainwallet](https://brainwallet.org/), or use other libraries to see if the same output can be generated or not.

And of course, you can set up the algorithm yourself. PassworK is made for Newbies after all.

### Does PassworK collect passwords?

No, and never will.

### Can I customize the way passwords are generated?

No at the moment. However, customization might be added such as choose the starting index of the generated Bitcoin address, or the length of other number rather than 16.

But adding customization might make users confused, if they don't remember the settings they choose, they might lose the password permanently.

### Should I switch if I already use password managers like 1Password/Lastpass/Enpass?

If you already use password managers like these, you are already more cautious about security than most of the others. And my suggestion is, keep on using whichever you are using now.

However, it is still worthy trying PassworK out. Rather than using the auto-generated passwords, PassworK can make sure that you can create the same password again, which can be handy in some situations.

Personally, I use PassworK to generate passwords gradually, and use Enpass to sync between Mac and iPhone.

### How can I contribute this project?

Share PassworK to your friends, help them make better passwords!

And of course, Pull Requests and Issues are always welcome :)

### I love this idea and would love to donate.

Thanks for your appreciation. You can donate bitcoins to @imcoddy on twitter via @changetip, or send to the following address directly: 1DNpE2i4H4bCRd6ezcgv3bL13Uc8GCEEPo
[![1DNpE2i4H4bCRd6ezcgv3bL13Uc8GCEEPo](https://blockchain.info/qr?data=1DNpE2i4H4bCRd6ezcgv3bL13Uc8GCEEPo&size=200)](https://blockchain.info/address/1DNpE2i4H4bCRd6ezcgv3bL13Uc8GCEEPo)
Yeah the address above is generated by the same method PassworK uses, take it out if you happened to find out my password ┗(°0°)┛

### Wait... What if I want to donate by Paypal?

Umm... I really appreciate it, but did you know that Paypal charges a high 5% + $0.05 micro-payments rate? Unless you wanna giveaway a bunch of bucks, otherwise let's just save some money by using Bitcoin :P

## License

Apache License 2.0
