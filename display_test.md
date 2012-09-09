﻿# Markdown Display Test #
**v1.0.8, Sepember 8, 2012**

This file serves three purposes:  
1) a markdown language reference,  
2) a test file to ensure that the markdown is being interpreted propertly, and   
3) a place to test out changes to the accompaning CSS file.

Let us begin:

# Headers

Hashmarks on the right are optional.

	# Header 1 #
	## Header 2 ##
	### Header 3 ###             (Hashes on right are optional)
	#### Header 4 ####
	##### Header 5 #####
	###### Header 6 ######

# Header 1 #
## Header 2 ##
### Header 3 ###
#### Header 4 ####
##### Header 5 #####
###### Header 6 ######

	## Markdown plus h2 with a custom ID ##         {#id-goes-here}
	[Link back to H2](#id-goes-here)

## Markdown plus h2 with a custom ID ##         {#id-goes-here}
[Link back to H2](#id-goes-here)

Alternatively, for H1 and H2, an underline-ish style:

	Alt-H1
	======

	Alt-H2
	------

Alt-H1
======

Alt-H2
------

# Paragraphs #

	This is a paragraph, which is text surrounded
	by whitespace. Paragraphs can be on one 
	line (or many), and can drone on for hours.

This is a paragraph, which is text surrounded
by whitespace. Paragraphs can be on one 
line (or many), and can drone on for hours.

	Text with  
	two trailing spaces  
	(on the right)  
	can be used  
	for things like poems  

Text with  
two trailing spaces  
(on the right)  
can be used  
for things like poems  

	Now some inline markup like _italics_,  **bold**, and `code()`. Note that underscores in 
	words are ignored in Markdown Extra.

Now some inline markup like _italics_,  **bold**, and `code()`. Note that underscores in 
words are ignored in Markdown Extra.

	> Blockquotes are like quoted text in email replies
	>> And, they can be nested
	>>> Level three

> Blockquotes are like quoted text in email replies
>> And, they can be nested
>>> Level three

	<div class="custom-class" markdown="1">
	This is a div wrapping some Markdown plus.  Without the
	DIV attribute (the 'markdown=1' part), it ignores the block. 
	</div>

<div class="custom-class" markdown="1">
This is a div wrapping some Markdown-Plus.  Without the
DIV attribute (the 'markdown=1' part), it ignores the block. 
</div>

# Links #

	Here is a Markdown link to [Google](http://google.com). 

	This is [an example][id] reference-method link.
	[id]: http://example.com/ "Optional Title Here"

	
	<http://example.com/>
	<address@example.com>

Here is a Markdown link to [Google](http://google.com). 

This is [an example][id] reference-method link.  
[id]: http://example.com/ "Optional Title Here"


<http://example.com/>
<address@example.com>

As a bonus, email addresses are automatically obscured.

# Images #
	![Alt text](/files/expand_arrow.JPG "Image call example")
	![Alt text](/path/to/img.jpg)
	![Alt text](/path/to/img.jpg "Title")
	![Alt text][img1]
	[img1]: /path/to/img.jpg "Title"

![Alt text](sample.png "Image call example")
![Alt text](sample.png)
![Alt text](sample.png "Title")
![Alt text][img1]
[img1]: sample.png "Title" 

# Lists #

Use *, -, or - to create a list. Use numbers to create a numbered list.

	* Bullet lists are easy too
	- Another one
	+ Another one
	
	1. A numbered list
	2. Which is numbered
	3. With periods and a space

* Bullet lists are easy too
- Another one
+ Another one

1. A numbered list
2. Which is numbered
3. With periods and a space

# Code #

Code can be indented for marked off with ~~~ above and below the block.

    // Code is just text indented a bit
    which(is_easy) to_remember();

~~~
// Markdown extra adds un-indented code blocks too

if (this_is_more_code == true && !indented) {
    // tild wrapped code blocks, also not indented
}
~~~

For inline code:

	Use `<div>` tags
	`echo uname -a`

Use `<div>` tags
`echo uname -a`

# Horizontal rules

	* * * *
	****
	- - -

* * * *
****
- - -

# Tables (Markdown-Plus) #

	| Header | Header | Right  |
	| ------ | ------ | -----: |
	|  Cell  |  Cell  |   $10  |
	|  Cell  |  Cell  |   $20  |

| Header | Header | Right  |
| ------ | ------ | -----: |
|  Cell  |  Cell  |   $10  |
|  Cell  |  Cell  |   $20  |

* Outer pipes on tables are optional
* Colon used for alignment (right versus left)

# Definition Lists (Markdown-Plus) #

	Bottled water
	: $ 1.25
	: $ 1.55 (Large)

	Milk
	Pop
	: $ 1.75

Bottled water
: $ 1.25
: $ 1.55 (Large)

Milk
Pop
: $ 1.75

* Multiple definitions and terms are possible
* Definitions can include multiple paragraphs too

# Abbreviations (Markdown-Plus) #

	Hover over this here [ABBR] (a tooltip should show up)
	*[ABBR]: Markdown-Plus abbreviations (produces an <abbr> tag)
	
Hover over this here [ABBR] (a tooltip should show up)

*[ABBR]: Markdown-Plus abbreviations (produces an <abbr> tag)

# Footnotes (Markdown-Plus) #

	That's some text with a footnote.[^1]

	[^1]: And that's the footnote.

That's some text with a footnote.[^1]

[^1]: And that's the footnote.

Note that footnotes show up at the bottom of the page, with a
link back to its place in the original text.
Note that two footnotes cannot have the same "name". 
	
# Literal Characters #

The following characters sometimes have special meanings in Markdown. You
can make sure Markdown doesn't interpret these characters by placing a backslash in front of them.

    \  backslash
    `  backtick
    *  asterisk
    _  underscore
    {} curly braces
    [] square brackets
    () parentheses
    #  hash mark
    +  plus sign
    -  minus sign (hyphen)
    .  dot
    !  exclamation mark
    :  colon
    |  pipe
	
	
# SmartyPants #
SmartyPants transforms:

* straight quotes (" and ') in "curly" 'quotes'
* Backtick quotes into ``curly'' quotes
* Dashed in en- and em- dashes: -- and ---
* Three consecutive dots in an ellipsis: ...
* Adds unbreakable spaces
 * before a colon :  
 * before a semicolon ;
 * before an explamation mark !
 * before a question mark ?
 * inside << French style quotes >>
 * as the thousand seperator 100 000
 * between a value and common unit symbols  12 kg  and 10 °C
	
# jsMath #
jsMath has been activated, allowing the typing of math formulas. For more
information about jsMath: <http://www.math.union.edu/~dpvc/jsmath/>. For
more information on how to use this: <https://github.com/drdrang/php-markdown-extra-math>.
In general formulas are encapsulated by \ ( and \ ).

Formulas can be inline

	where \(\alpha = (t_1 - t_0)/L\) is the rate at which the thickness increases

where \(\alpha = (t_1 - t_0)/L\) is the rate at which the thickness increases


Some other samples:

	\(\sqrt{x^2+1}\)
	\(\root 3\of {1-\pi x^2}\)
	\(\overbrace{x+\cdots+x}^{k\;\rm times}\)
	\(f(x)=\cases {
      x^2+1&\text{if $x<0$}\cr
      1-x&\text{otherwise}
	}\)
	\(\left[\matrix{a^2-b^2& -1\\ 1& 2ab}\right]\)

\(\sqrt{x^2+1}\)

\(\root 3\of {1-\pi x^2}\)

\(\overbrace{x+\cdots+x}^{k\;\rm times}\)

\(f(x)=\cases {
  x^2+1&\text{if $x<0$}\cr
  1-x&\text{otherwise}
}\)

\(\left[\matrix{a^2-b^2& -1\\ 1& 2ab}\right]\)

	\(\int^1_\kappa
	\left[\bigl(1-w^2\bigr)\bigl(\kappa^2-w^2\bigr)\right]^{-1/2} dw
	= \frac{4}{\left(1+\sqrt{\kappa}\,\right)^2} K
	\left(\left(\frac{1-\sqrt{\kappa}}{1+\sqrt{\kappa}}\right)^{\!\!2}\right)\)
	
\(\int^1_\kappa
\left[\bigl(1-w^2\bigr)\bigl(\kappa^2-w^2\bigr)\right]^{-1/2} dw
= \frac{4}{\left(1+\sqrt{\kappa}\,\right)^2} K
\left(\left(\frac{1-\sqrt{\kappa}}{1+\sqrt{\kappa}}\right)^{\!\!2}\right)\)

	\(\mathop{\rm grd} \phi(z) =
	\left(a+\frac{2d}{\pi}\right) v_\infty\, \overline{f'(z)} =
	v_\infty \left[ \pi a + \frac{2d}{\pi a + 2dw^{-1/2}(w-1)^{1/2}} \right]^-\)

\(\mathop{\rm grd} \phi(z) =
\left(a+\frac{2d}{\pi}\right) v_\infty\, \overline{f'(z)} =
v_\infty \left[ \pi a + \frac{2d}{\pi a + 2dw^{-1/2}(w-1)^{1/2}} \right]^-\)

# For more information #
* Markdown - <http://daringfireball.net/projects/markdown/syntax>
* Markdown Plus - <http://michelf.ca/projects/php-markdown/extra/>
* SmartyPants (in php) - <http://michelf.ca/projects/php-smartypants/>
* jsMath - <http://www.math.union.edu/~dpvc/jsmath/>
* Markdown and jsMath - <https://github.com/drdrang/php-markdown-extra-math>