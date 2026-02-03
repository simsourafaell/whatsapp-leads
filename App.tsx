import React, { useMemo, useState } from 'react';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent('Novo lead - Página de Vendas');
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}`);
    return `mailto:simsourafaell@gmail.com?subject=${subject}&body=${body}`;
  }, [name, email]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) {
      return;
    }
    setIsSubmitted(true);
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-light">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-accent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-brand-accent">
              Autoridade em conversão
            </span>
            <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
              Transforme visitantes em clientes com uma Página de Vendas que realmente vende
            </h1>
            <p className="text-lg text-white/70 md:text-xl">
              Criamos páginas estratégicas, rápidas e otimizadas para conversão no WhatsApp.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-black transition hover:bg-brand-accentHover"
              >
                Quero minha Página de Vendas
              </a>
              <a
                href="#solucao"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/60"
              >
                Ver como funciona
              </a>
            </div>
          </div>
          <div className="glass w-full max-w-md rounded-3xl p-8 shadow-2xl">
            <h2 className="font-heading text-2xl font-semibold">Resultados rápidos e mensuráveis</h2>
            <p className="mt-4 text-white/70">
              Estratégia, design e copy juntos para gerar mais mensagens no WhatsApp e leads realmente qualificados.
            </p>
            <div className="mt-6 grid gap-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">✓</span>
                <span>Layout moderno, rápido e responsivo.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">✓</span>
                <span>Copy focada em conversão no WhatsApp.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">✓</span>
                <span>Estrutura estratégica para cada nicho.</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-semibold">Você está enfrentando isso?</h2>
            <p className="text-white/70">
              Entendemos exatamente o que está acontecendo quando o tráfego chega, mas as vendas não aparecem.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              'Você investe em tráfego e não vende?',
              'Pessoas clicam, mas não chamam no WhatsApp?',
              'Seu produto é bom, mas a página não convence?',
            ].map((item) => (
              <div key={item} className="glass rounded-2xl p-5 text-white/90">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="solucao" className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl font-semibold">
              A solução é uma Página de Vendas estratégica
            </h2>
            <p className="text-white/70">
              Criamos páginas completas para gerar autoridade imediata, explicar seu valor e direcionar o visitante ao
              WhatsApp com clareza e confiança.
            </p>
            <div className="grid gap-3 text-white/80">
              <div className="flex items-center gap-3">
                <span className="text-brand-accent">●</span>
                Design profissional que transmite credibilidade.
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-accent">●</span>
                Copy persuasiva para transformar atenção em ação.
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-accent">●</span>
                Estrutura pensada para conversão e provas sociais.
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-accent">●</span>
                Integração direta com WhatsApp.
              </div>
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <h3 className="font-heading text-2xl font-semibold">Benefícios diretos</h3>
            <div className="mt-6 grid gap-4">
              {[
                'Mais mensagens no WhatsApp',
                'Leads qualificados',
                'Mais vendas com menos esforço',
                'Página rápida e responsiva',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent">
                    ✓
                  </span>
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="formulario" className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl font-semibold">
              Preencha seus dados para falar diretamente conosco no WhatsApp
            </h2>
            <p className="text-white/70">
              Quanto mais informações, mais rápido conseguimos preparar uma solução personalizada para o seu negócio.
            </p>
            <div className="glass rounded-2xl p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-semibold text-white/80" htmlFor="nome">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-brand-gray px-4 py-3 text-white outline-none transition focus:border-brand-accent"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-white/80" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-brand-gray px-4 py-3 text-white outline-none transition focus:border-brand-accent"
                    placeholder="Digite seu melhor email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-black transition hover:bg-brand-accentHover"
                >
                  Enviar dados
                </button>
              </form>
            </div>
          </div>
          <div className="glass flex flex-col justify-between gap-6 rounded-3xl p-8">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-semibold">Seu contato é prioridade</h3>
              <p className="text-white/70">
                Assim que recebermos seus dados, nossa equipe entra em ação para criar uma página alinhada ao seu funil.
              </p>
              <p className="text-sm text-white/60">
                O botão do WhatsApp será liberado automaticamente após o envio do formulário.
              </p>
            </div>
            <a
              href={isSubmitted ? 'https://wa.me/258834757908' : undefined}
              className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition ${
                isSubmitted
                  ? 'bg-emerald-400 text-brand-black hover:bg-emerald-300'
                  : 'cursor-not-allowed border border-white/20 text-white/40'
              }`}
            >
              Falar agora no WhatsApp
            </a>
            {!isSubmitted && (
              <p className="text-xs text-white/50">
                Preencha o formulário acima para liberar o acesso ao WhatsApp.
              </p>
            )}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Empreendedores que já aumentaram suas conversões',
              text: 'Estruturas criadas para acelerar decisões e gerar autoridade instantânea.',
            },
            {
              title: 'Páginas feitas para quem quer vender todos os dias',
              text: 'Mensagens claras, layout limpo e foco total em ação.',
            },
            {
              title: 'Confiança que transforma visitantes em leads',
              text: 'Seu público entende rápido o valor e parte para o contato.',
            },
          ].map((item) => (
            <div key={item.title} className="glass rounded-3xl p-6">
              <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-white/70">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl bg-gradient-to-r from-blue-900 via-brand-gray to-brand-black p-10 text-center shadow-2xl">
          <h2 className="font-heading text-3xl font-semibold">
            Cada dia sem uma página estratégica é dinheiro perdido
          </h2>
          <p className="mt-4 text-white/70">
            Não deixe seu tráfego esfriar. Dê o próximo passo agora.
          </p>
          <div className="mt-6">
            <a
              href="#formulario"
              className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-brand-black transition hover:bg-brand-accentHover"
            >
              Quero minha Página de Vendas Agora
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
          <p>© 2024 Agência de Conversão.</p>
          <div className="flex flex-col gap-2 text-center md:text-right">
            <span>Email: crsimlink@gmail.com</span>
            <span>WhatsApp: +258 83 475 7908</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
