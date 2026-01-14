import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-[600px] text-center">
        {/* 404 Number */}
        <div className="text-[clamp(8rem,20vw,16rem)] font-light leading-[0.9] tracking-tighter mb-8 text-foreground font-heading">
          404
        </div>

        {/* Divider */}
        <div className="w-[100px] h-px bg-border mx-auto mb-12" />

        {/* Message */}
        <h1 className="text-2xl font-medium mb-4 font-heading">
          Página Não Encontrada
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed mb-12">
          O espaço que você procura não existe neste plano. Talvez tenha sido demolido, ou nunca foi construído.
        </p>

        {/* Actions */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn">
            Voltar ao Início
          </Link>
          <Link href="/projetos" className="btn btn-outline">
            Ver Projetos
          </Link>
        </div>

        {/* Footer Note */}
        <p className="mt-16 text-xs uppercase tracking-[0.15em] text-muted-foreground opacity-50">
          Error 404 — Rota Inexistente
        </p>
      </div>
    </main>
  );
}
