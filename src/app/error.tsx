"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-background">
      <div className="max-w-[600px] text-center">
        {/* Error Icon */}
        <div className="text-8xl mb-8 opacity-30">
          ⚠️
        </div>

        {/* Divider */}
        <div className="w-[100px] h-px bg-border mx-auto mb-12" />

        {/* Message */}
        <h1 className="text-2xl font-medium mb-4 font-heading">
          Algo Deu Errado
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed mb-12">
          Ocorreu um erro inesperado. A estrutura pode estar comprometida. Tente novamente ou volte ao início.
        </p>

        {/* Error Details (Development) */}
        {process.env.NODE_ENV === "development" && (
          <details className="mb-8 p-4 bg-secondary border border-border text-left text-sm font-mono">
            <summary className="cursor-pointer mb-2">
              Detalhes do Erro
            </summary>
            <pre className="whitespace-pre-wrap wrap-break-word text-destructive">
              {error.message}
            </pre>
          </details>
        )}

        {/* Actions */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button onClick={reset} className="btn">
            Tentar Novamente
          </button>
          <a href="/" className="btn btn-outline">
            Voltar ao Início
          </a>
        </div>

        {/* Footer Note */}
        <p className="mt-16 text-xs uppercase tracking-[0.15em] text-muted-foreground opacity-50">
          Runtime Error
        </p>
      </div>
    </main>
  );
}
