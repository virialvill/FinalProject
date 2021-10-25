---
layout: layouts/layout.html
pageTitle: Recommendations
navTitle: Dog Videos


---

If you and your dog are facing some challenges (training, anxiety, or fear). Here are some videos of trainers and channels that we recommend so that you and your best friend can have a better relationship and an enjoyable time. 


{% for post in collections.post %}

<h2><a href="{{ post.url }}">{{ post.data.pageTitle }}></a></h2>

{% endfor %}



<h2>Hope you enjoy it!</h2>

![happy dog](/img/happy.jpg#happypet)