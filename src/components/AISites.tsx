import { useState, useEffect } from 'react';

declare module 'react' {
  interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
    onDidStartLoading?: () => void;
    onDidFinishLoad?: () => void;
    onDidFailLoad?: (event: {errorCode: number, errorDescription: string}) => void;
    webpreferences?: string;
    partition?: string;
  }
}
declare global {
  interface Window {
    electron: any;
  }
}

interface AISite {
  id: string;
  name: string;
  logo: string;
  url: string;
}

const aiSites: AISite[] = [
  {
    id: 'ultraidesk',
    name: 'UltraiDesk',
    logo: './ai-logo/ultraidesk.svg',
    url: 'https://ultraidesk.trailw.com/app-cover/1.0.0.html'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    logo: './ai-logo/deepseek-color.svg',
    url: 'https://chat.deepseek.com/'
  },
  {
    id: 'doubao',
    name: 'DouBao',
    logo: './ai-logo/doubao-color.svg',
    url: 'https://www.doubao.com/chat/'
  },
  {
    id: 'moonshot',
    name: 'MoonShot',
    logo: './ai-logo/kimi-color.svg',
    url: 'https://kimi.moonshot.cn/'
  },
  {
    id: 'tongyi',
    name: 'Tongyi',
    logo: './ai-logo/qwen-color.svg',
    url: 'https://tongyi.aliyun.com/'
  },
  {
    id: 'hunyuan',
    name: 'HunYuan',
    logo: './ai-logo/hunyuan-color.svg',
    url: 'https://yuanbao.tencent.com/'
  },
  {
    id: 'wenxin',
    name: 'WenXin',
    logo: './ai-logo/wenxin-color.svg',
    url: 'https://yiyan.baidu.com/X1'
  },
  {
    id: 'nami',
    name: 'Nami',
    logo: './ai-logo/nami-color.svg',
    url: 'https://bot.n.cn/'
  },
  {
    id: 'ChatGLM',
    name: 'ChatGLM',
    logo: './ai-logo/chatglm-color.svg',
    url: 'https://chatglm.cn/main/alltoolsdetail?lang=zh'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    logo: './ai-logo/chatgpt.svg',
    url: 'https://chatgpt.com/'
  },
  {
    id: 'copilot',
    name: 'Copilot',
    logo: './ai-logo/copilot-color.svg',
    url: 'https://copilot.microsoft.com/'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    logo: './ai-logo/gemini-color.svg',
    url: 'https://gemini.google.com'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    logo: './ai-logo/midjourney.svg',
    url: 'https://www.midjourney.com'
  }
];

interface AISitesProps {
  onSiteSelect: (url: string) => void;
}

export function AISites({ onSiteSelect }: AISitesProps) {
  const [selectedSite, setSelectedSite] = useState<string>(aiSites[0].id);
  const currentSite = aiSites.find(site => site.id === selectedSite);
  
  useEffect(() => {
    if (currentSite?.url) {
      onSiteSelect(currentSite.url);
    }
  }, [currentSite?.url, onSiteSelect]);

  console.log('Selected site URL:', currentSite?.url);

  return (
    <div className="ai-container">
      <div className="ai-site-list">
        {aiSites.map((site) => (
          <div
            key={site.id}
            className={`ai-site-item ${selectedSite === site.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedSite(site.id);
              onSiteSelect(site.url);
            }}
            style={{
              backgroundColor: selectedSite === site.id ? '#f1f5f9' : 'transparent'
            }}
          >
            <img src={site.logo} alt={site.name} className="ai-site-logo" />
            <span className="ai-site-name">{site.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
