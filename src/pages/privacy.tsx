import React from "react";
import Link from "next/link";
import styled from "styled-components";
import SeoSettings from "./components/utils/SeoSettings";

const Privacy = () => {
  return (
    <BasicContainer>
      <SeoSettings
        pageTitle={"プライバシーポリシー"}
        pageDescription={
          "比較ちゃんのプライバシーポリシーです。ご利用前にご確認ください。"
        }
        pagePath={"https://hikakuchan.jp/privacy"}
        pageImg={"https://hikakuchan.jp/privacy"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <BasicSubContainer>
        <BasicSubTitle>プライバシーポリシー</BasicSubTitle>
        <BasicText>
          <BasicButton>
            <Link href={"/"}>トップに戻る</Link>
          </BasicButton>
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicText>
          比較ちゃんは、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>第1条（個人情報）</BasicSubTitle>
        <BasicText>
          「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>第2条（個人情報の収集方法）</BasicSubTitle>
        <BasicText>
          私たちは、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、私たちの提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>第3条（個人情報を収集・利用する目的）</BasicSubTitle>
        <BasicText>
          私たちが個人情報を収集・利用する目的は、以下のとおりです。
        </BasicText>
        <BasicText>私たちのサービスの提供・運営のため</BasicText>
        <BasicText>
          ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
        </BasicText>
        <BasicText>
          ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び私たちが提供する他のサービスの案内のメールを送付するため
        </BasicText>
        <BasicText>
          メンテナンス，、重要なお知らせなど必要に応じたご連絡のため
        </BasicText>
        <BasicText>
          利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため
        </BasicText>
        <BasicText>
          ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため
        </BasicText>
        <BasicText>
          有料サービスにおいて、ユーザーに利用料金を請求するため
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>
          上記の利用目的に付随する目的
          <br />
          第4条（利用目的の変更）
        </BasicSubTitle>
        <BasicText>
          私たちは、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
        </BasicText>
        <BasicText>
          利用目的の変更を行った場合には、変更後の目的について、私たち所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>第5条（個人情報の第三者提供）</BasicSubTitle>
        <BasicText>
          私たちは、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
        </BasicText>
        <BasicText>
          人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
        </BasicText>
        <BasicText>
          公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
        </BasicText>
        <BasicText>
          国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
        </BasicText>
        <BasicText>
          予め次の事項を告知あるいは公表し、かつ私たちが個人情報保護委員会に届出をしたとき
        </BasicText>
        <BasicText>利用目的に第三者への提供を含むこと</BasicText>
        <BasicText>第三者に提供されるデータの項目</BasicText>
        <BasicText>第三者への提供の手段または方法</BasicText>
        <BasicText>
          本人の求めに応じて個人情報の第三者への提供を停止すること
        </BasicText>
        <BasicText>本人の求めを受け付ける方法</BasicText>
        <BasicText>
          前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。
        </BasicText>
        <BasicText>
          私たちが利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合
        </BasicText>
        <BasicText>
          合併その他の事由による事業の承継に伴って個人情報が提供される場合
        </BasicText>
        <BasicText>
          個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いた場合
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>第6条（個人情報の開示）</BasicSubTitle>
        <BasicText>
          私たちは、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。
        </BasicText>
        <BasicText>
          ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
        </BasicText>
        <BasicText>
          なお、個人情報の開示に際しては、1件あたり1,000円の手数料を申し受けます。
        </BasicText>
        <BasicText>
          本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合
        </BasicText>
        <BasicText>
          私たちの業務の適正な実施に著しい支障を及ぼすおそれがある場合
        </BasicText>
        <BasicText>その他法令に違反することとなる場合</BasicText>
        <BasicText>
          前項の定めにかかわらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示いたしません。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>第7条（個人情報の訂正および削除）</BasicSubTitle>
        <BasicText>
          ユーザーは、私たちの保有する自己の個人情報が誤った情報である場合には、私たちが定める手続きにより、私たちに対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。
        </BasicText>
        <BasicText>
          私たちは、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
        </BasicText>
        <BasicText>
          私たちは、前項の規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは遅滞なく、これをユーザーに通知します。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>第8条（個人情報の利用停止等）</BasicSubTitle>
        <BasicText>
          私たちは、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。
        </BasicText>
        <BasicText>
          前項の調査結果に基づき、その請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の利用停止等を行います。
        </BasicText>
        <BasicText>
          私たちは、前項の規定に基づき利用停止等を行った場合、または利用停止等を行わない旨の決定をしたときは、遅滞なく、これをユーザーに通知します。
        </BasicText>
        <BasicText>
          前2項にかかわらず、利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって、ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は、この代替策を講じるものとします。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>第9条（プライバシーポリシーの変更）</BasicSubTitle>
        <BasicText>
          本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
        </BasicText>
        <BasicText>
          私たちが別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
        </BasicText>
      </BasicSubContainer>
      <BasicSubContainer>
        <BasicSubTitle>第10条（お問い合わせ窓口）</BasicSubTitle>
        <BasicText>
          本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
        </BasicText>
        <BasicText>比較ちゃん</BasicText>
        <BasicText>Eメールアドレス: okada031717@gmail.com</BasicText>
      </BasicSubContainer>
    </BasicContainer>
  );
};

export default Privacy;

const BasicContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BasicSubContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BasicSubTitle = styled.h2`
  position: relative;
  padding: 1.5rem 1rem;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    height: 10px;
    content: "";
    background-image: -webkit-repeating-linear-gradient(
      135deg,
      #000,
      #000 1px,
      transparent 2px,
      transparent 5px
    );
    background-image: repeating-linear-gradient(
      -45deg,
      #000,
      #000 1px,
      transparent 2px,
      transparent 5px
    );
    background-size: 7px 7px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;

const BasicText = styled.p`
  font-size: 1rem;
`;

const BasicButton = styled.button`
  display: inline-block;
  width: 100%;
  max-width: 350px;
  height: 3rem;
  margin: 0.5rem 0;
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #3c5e8b;
  border: none;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    background-color: #557ea7;
  }
`;
