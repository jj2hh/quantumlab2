# Creative Theme for Jekyll

A Jekyll implementation of the [Creative Theme](http://startbootstrap.com/template-overviews/creative/) template by [Start Bootstrap](http://startbootstrap.com).

Creative is a one page Bootstrap theme for creatives, small businesses, and other multipurpose uses.
The theme includes a number of rich features and plugins that you can use as a great boilerplate for your next Jekyll project! 

See it live in action at <https://volny.github.io/creative-theme-jekyll/>

## To use the Creative Theme template in your project

- Start by adding your info in `_config.yml`
- In `_layouts/front.html` reorder or remove section as you prefer.

-github로 개발 추후 webflow 이전에서 호스팅 염두
- 도메인 구매 대행사의 무료 서비스 이메일 포워딩이용 (Namecheap ..) 또는 Cloudflare(클라우드플레어) Email Routing 활용(추천)

- ✉️ 케이스 A: 방문자가 자기 아웃룩을 켜고 info@laboratory.com으로 이메일을 보낼 때[방문자 발송] $\rightarrow$ [Cloudflare] $\rightarrow$ [내 개인 지메일로 쏙!]이때는 홈페이지를 거치지 않고 이메일끼리 움직이는 순간입니다. Cloudflare가 중간에서 신호를 가로채 "어? 연구소 도메인으로 메일이 왔네? 이건 주인이 등록해 둔 개인 지메일로 패스해 줘야지!" 하고 배달원 역할을 수행합니다. (Formspree/Getform은 관여 안 함)

-  📝 케이스 B: 방문자가 홈페이지 'Contact' 페이지에서 이름과 문의 내용을 적고 [제출]을 누를 때[홈페이지에서 제출] $\rightarrow$ [Formspree / Getform API] $\rightarrow$ [내 개인 지메일로 알림!]이때는 웹사이트 내부의 폼 데이터가 움직이는 순간입니다. GitHub Pages는 백엔드가 없기 때문에 데이터를 받아줄 곳이 없죠. 이때 HTML 코드에 심어둔 Formspree나 Getform의 서버로 데이터가 전송되고, 이 서비스들이 데이터를 예쁘게 포장해서 내 개인 지메일로 알림 메일을 쏘아줍니다.

-  3. 결론: 연구소 사이트 구축 시 최종 조합법코딩 지식을 활용해 비용 0원으로 완벽한 시스템을 만들려면 이 세 가지를 모두 조합해서 사용하시면 됩니다.도메인의 네임서버를 Cloudflare로 지정합니다. (DDOS 방어 + HTTPS 보안 무료 확보)Cloudflare의 'Email Routing' 기능을 켜서 info@내도메인.com을 내 개인 지메일로 연결합니다.GitHub Pages로 연락처 페이지를 코딩할 때, Formspree나 Getform 중 마음에 드는 곳의 API 주소를 HTML <form action="...">에 넣습니다.이렇게 세팅하시면 웹사이트 방문자가 이메일을 직접 보내든, 홈페이지 폼으로 문의를 남기든 모든 메시지가 내 개인 지메일 한 곳으로 안전하고 직관적으로 모이게 됩니다.

--템플릿 레퍼런스
html5up.net


-- 메인의 free download 부분은 오더폼이 있는지 확인해서 온라인으로 넣을지 말지 고민. 없다면 삭제하고 contact부분만 남겨도 될듯

--quantumlab/_sass/_base.scss : 메인 CSS

