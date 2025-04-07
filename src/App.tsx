import { useTranslation } from 'react-i18next';
import {TranslationBtn} from "./components/TranslationBtn.tsx";
const App = () => {
  const { t } = useTranslation();
  return (

      <div className="flex justify-center items-center h-screen">
        <h1>{t("welcome")}</h1>
          <TranslationBtn/>
      </div>

  );
};

export default App;
