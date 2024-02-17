
function BotRespond(sentence, selectedLanguage, chat, setSentence)
{
if (sentence === 'Positive')
    {
        if (selectedLanguage === 'English')
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
              chat = "The text does not contain any offensive words and is highly complimentary, so the sentence's label is Positive.";
              setSentence(chat)
          }
          else if (randomNumber === 2)
          {
              chat = "I realized that the text contains many words praising someone, so in my opinion the label of the text should be Positive.";
              setSentence(chat)
          }
          else
          {
              chat = "In my opinion, the label of the sentence is Positive because the text shows the writer's satisfaction.";
              setSentence(chat)
          }
        }
        else if (selectedLanguage === 'Tiếng Việt')
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
              chat = "Tôi nhận thấy câu text có chứa nhiều từ khen ngợi 1 ai đó nên theo tôi nhãn của câu text nên là Tích Cực.";
              setSentence(chat)
          }
          else if (randomNumber === 2)
          {
              chat = "Đoạn text không có bất kì từ ngữ phản cảm nào và mang tính khen ngợi rất cao nên nhãn của câu là Tích Cực.";
              setSentence(chat)
          }
          else
          {
              chat = "Theo tôi, nhãn của câu là Tích Cực vì đoạn text thể hiện sự hài lòng của người viết.";
              setSentence(chat)
          }
        }
        else
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
            chat = "このテキストには多くの褒めの言葉が含まれているので、ラベルはポジティブだと思います。";
            setSentence(chat)
          }
          else if (randomNumber === 2)
          {
            chat = "このテキストには不快な言葉が含まれません。それに、非常に褒め言葉である、文のラベルはポジティブです。";
            setSentence(chat)
          }
          else
          {
            chat = "私の意見では、文のラベルはポジティブだと思う、文がユーザーの満足感を示しているためです。";
            setSentence(chat)
          }
        }
    }

    if (sentence === 'Negative')
    {
        if (selectedLanguage === 'English')
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
              chat = "I realized that the text contains many rude words. So in my opinion, the text's label should be Negative.";
              setSentence(chat)
          }
          else if (randomNumber === 2)
          {
              chat = "The text contains any offensive words and is highly critical, so the sentence's label is Negative.";
              setSentence(chat)
          }
          else
          {
              chat = "In my opinion, the label of the sentence is Negative because the text shows the writer's dissatisfaction.";
              setSentence(chat)
          }
        }
        else if (selectedLanguage === 'Tiếng Việt')
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
              chat = "Tôi nhận thấy câu text có chứa nhiều từ khiếm nhã nên theo tôi nhãn của câu text nên là Tiêu Cực.";
              setSentence(chat)
          }
          else if (randomNumber === 2)
          {
              chat = "Đoạn text có chứa từ ngữ phản cảm nào và mang tính chê trách rất cao nên nhãn của câu là Tiêu Cực.";
              setSentence(chat)
          }
          else
          {
              chat = "Theo tôi, nhãn của câu là Tiêu Cực vì đoạn text thể hiện sự không hài lòng của người viết.";
              setSentence(chat)
          }
        }
        else
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
            chat = "このテキストには失礼な言葉が多く含まれているので、私の意見では、テキストのラベルはネガティブだと思います。";
            setSentence(chat)
          }
          else if (randomNumber === 2)
          {
            chat = "このテキストには不快な言葉が含まれ、非常に批判的ですので、ラベルはネガティブだと思います。";
            setSentence(chat)
          }
          else
          {
            chat = "私の意見では、このテキストがユーザーの不満を示しているために、テキストのラベルはネガティブだと思います。";
            setSentence(chat)
          }
        }
    }

    if (sentence === 'Neutral')
    {
        if (selectedLanguage === 'English')
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
              chat = "I realized that the text does not express the user's satisfaction or disappointment, so the label is Neutral.";
              setSentence(chat)
          }
          else if (randomNumber === 2)
          {
              chat = "The text does not contain any negative words or compliments, so I think the label of the sentence is Neutral.";
              setSentence(chat)
          }
          else
          {
              chat = "In my opinion, the label of the sentence is Neutral because the text does not express the writer's satisfaction or disappointment.";
              setSentence(chat)
          }
        }
        else if (selectedLanguage === 'Tiếng Việt')
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
              chat = "Tôi nhận thấy câu text không thể hiện sự hài lòng hay thất vọng của người dùng nên nhãn là Trung Tính.";
              setSentence(chat)
          }
          else if (randomNumber === 2)
          {
              chat = "Đoạn text không có bất kì từ ngữ phản cảm cũng như từ ngữ khen ngợi nên tôi nghĩ nhãn của câu là Trung Tính.";
              setSentence(chat)
          }
          else
          {
              chat = "Theo tôi, nhãn của câu là Trung Tính vì đoạn text không thể hiện sự hài lòng hay thất vọng của người viết.";
              setSentence(chat)
          }
        }
        else
        {
          var randomNumber = Math.floor(Math.random() * 3) + 1;
          if (randomNumber === 1)
          {
            chat = "このテキストがユーザーの満足や失望を表現していないことに気づいたので、ラベルはニュートラルだと思います。";
            setSentence(chat)
          }
          else if (randomNumber === 2)
          {
            chat = "このテキストには否定的な言葉や褒め言葉が含まれていないので、テキストのラベルはニュートラルだと思います。";
            setSentence(chat)
          }
          else
          {
            chat = "私の意見では、このテキストがユーザーの満足や失望を表現していないため、テキストのラベルはニュートラルです。";
            setSentence(chat)
          }
        }
    }}

    export default BotRespond;