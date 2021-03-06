

# Project SweetHome

## 구현 실습 사이트 : 오늘의집

## 구현을 통한 학습 목표 : 회원가입부터, 장바구니에 물건을 담는 부분까지의, 유저 입장에서 하나의 사이클을 통해 백엔드와 프론트간의 어떠한 소통이 되는지, 그리고 그에 따른 웹의 동작이 어떻게 이루어지는지를 이해

## 구현내용 : 
### 1. 회원가입(**본인구현**)
한달동안 배운 많은 내용을 기반으로, 복습을 통해 개념을 더욱 확고히 다지기를 목적으로 구현

 <img width="191" alt="스크린샷 2021-03-02 오전 12 11 57" src="https://user-images.githubusercontent.com/75110649/109516797-f3bbb380-7aeb-11eb-98d6-3a4a36425339.png">
 
- 사진과 같이, 컴포넌트 구성을 하였으며, 다음 프로젝트에는 조금더 가독성이 좋고 재사용이 가능한 컴포넌트의 형태를 갖출 필요성을 느꼈음

<img width="418" alt="스크린샷 2021-03-02 오전 12 17 36" src="https://user-images.githubusercontent.com/75110649/109517506-b572c400-7aec-11eb-8ad1-88289315be2b.png">

- 최종적으로 라우트에 연결되는 컴포넌트들은 최대한 간결하게 유지하려고 노력하였음

<img width="345" alt="스크린샷 2021-03-02 오전 12 19 29" src="https://user-images.githubusercontent.com/75110649/109517939-2023ff80-7aed-11eb-8f6f-92cb8eb1362e.png">

- 가독성을 위해 인풋태그의 함수합치기를 통해 리펙토링하여 코딩해보았고, 여전히 투박한 코딩이 많지만, 내가 처음했던 코딩에 비해서는 상대적으로 직관적이고 가독성이 좋게 설계됐음
- 구현도 중요하지만 보기좋은 코딩을 위해, 반복적인 부분에 대한 고민을 계속 해야할듯함

<img width="422" alt="스크린샷 2021-03-02 오전 12 19 37" src="https://user-images.githubusercontent.com/75110649/109518348-83159680-7aed-11eb-8a81-94c158bad2ba.png">



![스크린샷 2021-03-02 오전 12 30 48](https://user-images.githubusercontent.com/75110649/109519395-8cebc980-7aee-11eb-8669-d6b6911a74b6.png)


- 회원가입 벨리데이션을 구현하면서, 구조분해 할당과, e.target을 사용하기 위한 콜백함수 사용을 터득하여 적극적으로 사용하려고 노력하였음
- 반복되는 구조이기에 분명히 리펙토링 해볼 수 있는 부분에 대해서 고민해봐야 함

스크린샷 2021-03-02 오전 12.19.48![image](https://user-images.githubusercontent.com/75110649/109519890-01bf0380-7aef-11eb-97ce-cdfffbb233a0.png)

- 통신에 따라 바뀌는 ip주소에 대비하여, 통해 SERVER 변수를 받아왔으며 fetch를 통해 회원가입의 벨리데이션에 맞는 정보를 전달하고 받아온 응답에 상응하는 결과를 로직으로 구현



### 2. 로그인(**본인구현**)
<img width="523" alt="스크린샷 2021-03-02 오전 12 36 53" src="https://user-images.githubusercontent.com/75110649/109520290-68dcb800-7aef-11eb-8bb6-7f77793c9911.png">

![image](https://user-images.githubusercontent.com/75110649/109521053-3aaba800-7af0-11eb-8b1f-d5e5ed95b571.png)


- fetch에 대한 이해도를 많이 높였으며, fetch를 통해 백엔드와 어떤식으로 소통하는지에 대한, 나아가서는 웹이라는게 어떤식으로 구동하는지에 대해 이해하려고 노력하였음
- 백엔드에서도 회원가입과 로그인의 기준이 되는 벨리데이션을 만들어 놓았지만, 내가 구현하는 부분에서, 조건에 안맞으면 회원가입이나 로그인 버튼 자체가 활성화가 안되게 구현해보았음
- 삼항 연산자를 적극 사용하여, 좀 더 간결한 코딩을 하였음
- withRouter와 Link의 개념을 정확하게 파악하여, 이동전에 로직을 만들고 싶을 때, withRouter로 라우팅 하는 방법을 재정리하고 습득하였음


### 3. 커뮤니티메인
### 4. 스토어메인
### 5. 스토어 상세페이지
### 6. 장바구니(**본인구현**)
![image](https://user-images.githubusercontent.com/75110649/109521804-084e7a80-7af1-11eb-91ee-4c49b46e8424.png)

<img width="649" alt="스크린샷 2021-03-02 오전 12 50 32" src="https://user-images.githubusercontent.com/75110649/109522298-76933d00-7af1-11eb-9a8d-52b4ff8c7a94.png">

- ComponentDidMount 메서드에 대한 이해와 더불어 React의 생명주기에 대한 개념을 재정리 하였음

<img width="358" alt="스크린샷 2021-03-02 오전 12 53 24" src="https://user-images.githubusercontent.com/75110649/109522526-b78b5180-7af1-11eb-98b1-97c555e19691.png">

  <img width="1183" alt="스크린샷 2021-03-02 오전 1 00 49" src="https://user-images.githubusercontent.com/75110649/109523521-caeaec80-7af2-11eb-9311-41b22aafc853.png">

- 장바구니의 수량이 변할 때, 바뀐 상품의 키값을 백엔드로 보내주고 곧 바로 그 바뀐 데이터를 fetch받아 state에 변화를 주어 재렌더링이 이뤄질 수 있는 로직을 구현 및 이해
- 이 때, 처음에는 await와 async에 대해 알지 못했기 때문에, 위에서부터 fetch를 나열하면 순서대로 될 줄 알았으나 서버 상태에 따라서 전후가 바뀌어 정보의 전달이 원활하지 않은상황이 발생
- 동기 비동기에 대한 구글링을 통해, await로 하나의 fetch가 끝난 후에 다음 fetch가 실행되도록 구현
- 장바구니를 이용하기 위해, 매 통신마다 페이지의 로컬스토리지에 저장되어 있는 유저의 토큰을 보내는 것에 대한 이해를 하였음

<img width="585" alt="스크린샷 2021-03-02 오전 1 02 42" src="https://user-images.githubusercontent.com/75110649/109523770-0e455b00-7af3-11eb-864f-2f81faf15d4c.png">

- 백엔드에서 넘어올 데이터가 각각 들어맞게 자리잡을 수 있는 집을 만들어준다는 개념으로 접근
- Map 메서드에 대한 이해도를 많이 이해하였음

<img width="943" alt="스크린샷 2021-03-02 오전 12 50 03" src="https://user-images.githubusercontent.com/75110649/109524151-801da480-7af3-11eb-9f4d-e8c7f519d64d.png">

-목데이터를 활용하여, 백엔드에서 정보가 넘어오기 전에 미리 보여지는 렌더링을 확인하였음 


### 7. Nav/Footer(**본인구현**)
![스크린샷 2021-03-02 오전 1 07 13](https://user-images.githubusercontent.com/75110649/109524283-a8a59e80-7af3-11eb-8688-716356db9fd9.png)

<img width="566" alt="스크린샷 2021-03-02 오전 1 08 30" src="https://user-images.githubusercontent.com/75110649/109524482-ec98a380-7af3-11eb-9b91-320b9e8eb985.png">

- 먼저 커뮤니티와 스토어라는 최상단 네비게이션안의 세부 카테고리에 대한 정보를 따로 js파일을 통해 관리하였음

<img width="545" alt="스크린샷 2021-03-02 오전 1 08 10" src="https://user-images.githubusercontent.com/75110649/109524581-0b973580-7af4-11eb-9404-94dcd8e2dd41.png">

<img width="450" alt="스크린샷 2021-03-02 오전 1 09 00" src="https://user-images.githubusercontent.com/75110649/109524589-0e922600-7af4-11eb-91f7-bd65f95f6c1d.png">


- 온마우스오버라는 호버효과와 비슷한 이벤트를 콜백함수로 사용하여, e.target의 innerText에 따라, 렌더링 되는 부분이 다르게 하였음

![스크린샷 2021-03-02 오전 1 11 22](https://user-images.githubusercontent.com/75110649/109524793-3ed9c480-7af4-11eb-8866-ca1c0dd37830.png)

- 개인적인 추가구현사항으로 filter를 사용하여, 백엔드에서 받아온 데이터의 상품명에 따라, 인풋의 벨류와 비교하여 아래에 나타나는 자동완성 부분을 구현하고 싶었지만 팀의 목표시간과 너무 멀어질 것 같아서 하지못했음, 리펙토링 과정에서 추가할 생각

![스크린샷 2021-03-02 오전 1 07 19](https://user-images.githubusercontent.com/75110649/109525072-81030600-7af4-11eb-8026-16f56f48ade6.png)

<img width="392" alt="스크린샷 2021-03-02 오전 1 14 10" src="https://user-images.githubusercontent.com/75110649/109525165-9bd57a80-7af4-11eb-9f4a-401ab0cae4bb.png">

- 작은 부분의 텍스트라도, 반복적인 ui가 나타나는 부분이면 따로 취합하여 데이터로 관리하려는 습관을 들이려고 노력하였음


