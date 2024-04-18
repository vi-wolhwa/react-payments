# 🎯 기능 구현 목록

## step 1 - 카드 번호 입력 기능

- 입력 할 신용카드 번호는 총 16자리만 입력할 수 있도록 한다.
  - 각 Input 별로 4글자를 초과할 경우 더 이상 입력되지 않도록 한다.
  - 숫자 이외에 다른 값은 입력되지 않도록 한다.
  - 카드 번호가 16자리가 아닐 경우 `카드 번호는 16자리 숫자여야 합니다.`라는 메시지를 화면에 보여줘야 한다.

## step 2 - 카드 유효기간 입력 기능

- 월과 년도를 범위 내에서 입력할 수 있어야 한다.
  - 숫자 외의 값은 입력하지 못하도록 한다.
  - 각 Input 마다 2자리 이상 입력할 경우 더 이상 입력되지 못하도록 한다.
  - 월이 01 ~ 12 이외 다른 값이 입력 될 경우 `월은 01에서 12 사이의 숫자여야 합니다.` 라는 메시지를 화면에 보여줄 수 있어야 한다.
  - 년도가 현재 년도 이전의 값이 입력 될 경우 `카드 유효기간이 지났습니다.` 라는 메시지를 화면에 보여줄 수 있어야 한다.

## step 3 - 카드 소유자 이름 입력 기능

- 영문자 대문자만 입력 가능해야 한다.
  - 영문자 이외 다른 값이 입력되었을 경우 `카드 소유자 이름은 대문자로 입력해야 합니다.` 라는 메시지를 화면에 보여줄 수 있어야 한다.

## step 4 - 실시간 프리뷰 업데이트 기능

- 사용자의 카드 정보 입력에 따라 카드 UI의 형태로 사용자에게 보여질 수 있어야 한다.
  - 카드 번호를 입력할 경우 실시간으로 카드 번호가 보여질 수 있어야 하며, 마지막 8자리는 비밀번호의 형태로 보여질 수 있어야 한다.
  - 직성한 카드 번호에 따라 Visa 혹은 MasterCard 로고를 보여질 수 있어야 한다.
    - Visa 카드는 앞자리 번호가 `4`로 시작하며, 마스터카드는 앞자리 번호가 `50` ~ `55`로 시작해야 한다.
  - 카드 유효기간은 `MM/YY`의 형태로 보여질 수 있어야 한다.
  - 카드 소유자 이름은 `성(영어 대문자) 이름(영어 대문자)`의 형태로 보여질 수 있어야 한다.