import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function DashboardExpress() {
  const [step, setStep] = useState(0);
  const [dashboardName, setDashboardName] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [theme, setTheme] = useState('');
  const [logo, setLogo] = useState(null);
  const [customLogo, setCustomLogo] = useState(false);

  const reset = () => {
    setStep(0);
    setDashboardName('');
    setFileName('');
    setFileLink('');
    setTheme('');
    setLogo(null);
    setCustomLogo(false);
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
      <header className="bg-[#35A0EA] text-white px-4 py-3 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <img src="/logodash2.png" alt="Logo" className="w-[50px] h-[50px]" />
          <h1 className="text-2xl font-bold">Dashboard Express</h1>
        </div>
        <nav className="space-x-4">
          <button onClick={() => reset()}>INÍCIO</button>
          <button disabled>DOWNLOAD</button>
          <button disabled>FAQ</button>
        </nav>
      </header>

      <main className="p-8 max-w-3xl mx-auto">
        {step === 0 && (
          <Button onClick={() => setStep(1)}>NOVO DASHBOARD</Button>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <p>CRIE UM NOME PARA O SEU DASHBOARD</p>
            <div className="flex gap-2">
              <Input value={dashboardName} onChange={e => setDashboardName(e.target.value)} placeholder="Ex: Relatório Financeiro" />
              <Button onClick={() => setStep(2)}>OK</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <p>FAÇA UPLOAD DE UM ARQUIVO COM DADOS OU INSIRA UM LINK PARA UM ARQUIVO</p>
            <div className="flex gap-2">
              <Button onClick={() => setStep(3)}>ESCOLHER ARQUIVO</Button>
              <Button onClick={() => setStep(4)}>DIGITAR LINK</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p>ESCOLHA UM ARQUIVO (xls, xlsx, pdf, doc, txt, csv)</p>
            <input type="file" onChange={e => setFileName(e.target.files[0]?.name || '')} />
            {fileName && (
              <div className="flex gap-2 items-center">
                <Input value={fileName} readOnly />
                <Button onClick={() => setStep(5)}>OK</Button>
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <p>INSIRA O LINK DO ARQUIVO</p>
            <div className="flex gap-2">
              <Input value={fileLink} onChange={e => setFileLink(e.target.value)} placeholder="https://..." />
              <Button onClick={() => setStep(5)}>OK</Button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <p>ESCOLHA ENTRE UM TEMA CLARO OU ESCURO</p>
            <div className="flex gap-2">
              <Button onClick={() => { setTheme('claro'); setStep(6); }} className="bg-blue-200 text-black">TEMA CLARO</Button>
              <Button onClick={() => { setTheme('escuro'); setStep(6); }} className="bg-zinc-800 text-white">TEMA DARK</Button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-4">
            <p>DESEJA PERSONALIZAR O DASHBOARD COM O SEU LOGOTIPO?</p>
            <div className="flex gap-2">
              <Button onClick={() => setCustomLogo(true)}>SIM</Button>
              <Button onClick={() => setStep(7)}>NÃO</Button>
            </div>
          </div>
        )}

        {customLogo && step === 6 && (
          <div className="space-y-4">
            <input type="file" accept="image/png, image/jpeg" onChange={e => setLogo(e.target.files[0]?.name)} />
            {logo && (
              <div className="flex gap-2 items-center">
                <Input value={logo} readOnly />
                <Button onClick={() => setStep(7)}>OK</Button>
              </div>
            )}
          </div>
        )}

        {step === 7 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Resumo:</h2>
            <ul className="list-disc list-inside">
              <li><strong>Nome do Dashboard:</strong> {dashboardName}</li>
              <li><strong>Arquivo:</strong> {fileName || fileLink}</li>
              <li><strong>Tema:</strong> {theme}</li>
              <li><strong>Logotipo:</strong> {logo || 'Nenhum'}</li>
            </ul>
            <Button className="bg-green-600 hover:bg-green-700" disabled>GERAR DASHBOARD</Button>
          </div>
        )}
      </main>

      <footer className="text-center text-xs text-gray-400 py-6">
        Desenvolvido por Cleber Romero com a utilização de várias inteligências artificiais
      </footer>
    </div>
  );
}
