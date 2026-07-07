import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { glossary } from '../data/glossary';
import {
  getSessionById,
  sessionSlots,
  sessions,
  totalSessionCount,
} from '../data/sessions';

describe('learning content', () => {
  it('includes the required session 01 instructor profile', () => {
    const session = getSessionById('01');

    expect(session?.instructor?.name).toBe('박노성');
    expect(session?.instructor?.englishName).toBe('Noseong Park');
    expect(session?.instructor?.affiliationKo).toBe('KAIST 전산학부');
    expect(session?.instructor?.affiliationEn).toBe('School of Computing, KAIST');
  });

  it('keeps session 02 LLM terms in the glossary', () => {
    const terms = new Set(glossary.map((entry) => entry.term));

    for (const term of [
      'Token',
      'Embedding',
      'Transformer',
      'Self-Attention',
      'BERT',
      'GPT',
      'Prefill',
      'Decoding',
      'Autoregressive Generation',
      'In-context Learning',
      'Chain-of-thought',
      'Hallucination',
      'AI Infrastructure',
      'Qwen3-Next',
      'Gated DeltaNet',
      'Masked Self-Attention',
      'Hybrid Architecture',
      'Discrete Diffusion Language Model',
      'Scientific Foundation Model',
    ]) {
      expect(terms.has(term)).toBe(true);
    }
  });

  it('keeps session 03 graph ML terms in the glossary', () => {
    const terms = new Set(glossary.map((entry) => entry.term));

    for (const term of [
      'Graph',
      'Node',
      'Edge',
      'Relation',
      'Knowledge Graph',
      'Ontology',
      'Triplet',
      'Knowledge Graph Completion',
      'Graph Embedding',
      'Node Embedding',
      'Graph Representation Learning',
      'Graph Mining',
      'Graph Neural Network',
      'Graph Convolutional Network',
      'Computation Graph',
      'Message Passing',
      'Neighborhood Aggregation',
      'k-hop Neighbor',
      'Node Classification',
      'Link Prediction',
      'Graph Classification',
      'Fraud Detection',
      'Spatio-Temporal Graph',
      'Homophily',
      'Heterophily',
    ]) {
      expect(terms.has(term)).toBe(true);
    }
  });

  it('keeps session 04 knowledge graph embedding terms in the glossary', () => {
    const terms = new Set(glossary.map((entry) => entry.term));

    for (const term of [
      'Knowledge Graph Embedding',
      'Sparse Graph',
      'Entity Embedding',
      'Relation Embedding',
      'Scoring Function',
      'Translational Distance Model',
      'TransE',
      'Semantic Matching Model',
      'RESCAL',
      'DistMult',
      'ComplEx',
      'Mean Rank',
      'MRR',
      'Hits@K',
      'Hyper-relational Knowledge Graph',
      'Qualifier',
      'Multimodal Knowledge Graph',
      'Inductive Reasoning',
      'Relation Graph',
      'Knowledge Graph Construction',
      'GraphRAG',
      'Subgraph Retrieval',
      'Graph Database',
      'Data Governance',
    ]) {
      expect(terms.has(term)).toBe(true);
    }
  });

  it('keeps session 06-1 mobility data terms in the glossary', () => {
    const terms = new Set(glossary.map((entry) => entry.term));

    for (const term of [
      'Mobility Big Data',
      'Trajectory',
      'Smart Card Data',
      'Location Inference',
      'Mobility Regularity',
      'In-store Trajectory',
      'Dwell Time',
      'Zone Ratio',
      'Revisit Prediction',
      'Spatial Stream Processing',
      'Complex Event Processing',
      'Digital Tachograph',
      'Tactical Trajectory',
      'Latent Space',
      'Anomaly Detection',
      'Digital Twin',
      'Data Governance',
    ]) {
      expect(terms.has(term)).toBe(true);
    }
  });

  it('keeps session 06-2 infectious disease data science terms in the glossary', () => {
    const terms = new Set(glossary.map((entry) => entry.term));

    for (const term of [
      'Infectious Disease Data Science',
      'Imported Case Prediction',
      'Infection Risk',
      'Inbound Flow',
      'Hi-COVIDNet',
      'LSTM',
      'Fine-Grained EEM',
      'COVID-EENet',
      'District-Business Pair',
      'Economy View',
      'Geography View',
      'Epidemic View',
      'Microscopic Encoder',
      'Macroscopic Aggregator',
      'Digital Contact Tracing',
      'Cellular Trajectory',
      'POI Reconstruction',
      'Pincette',
      'Privacy-Preserving Data Science',
    ]) {
      expect(terms.has(term)).toBe(true);
    }
  });

  it('keeps model core elements in the glossary', () => {
    const terms = new Set(glossary.map((entry) => entry.term));

    for (const term of [
      'Input x',
      'Label y',
      'Prediction y-hat',
      'Parameter theta',
      'Weight w',
      'Bias b',
      'Loss',
      'Gradient',
    ]) {
      expect(terms.has(term)).toBe(true);
    }
  });

  it('keeps inline glossary aliases for technical terms', () => {
    const sigmoid = glossary.find((entry) => entry.term === 'Sigmoid');
    const dnn = glossary.find((entry) => entry.term === 'Deep Neural Network');
    const prefill = glossary.find((entry) => entry.term === 'Prefill');
    const qwen = glossary.find((entry) => entry.term === 'Qwen3-Next');
    const kge = glossary.find(
      (entry) => entry.term === 'Knowledge Graph Embedding',
    );
    const graphRag = glossary.find((entry) => entry.term === 'GraphRAG');
    const trajectory = glossary.find((entry) => entry.term === 'Trajectory');
    const pincette = glossary.find((entry) => entry.term === 'Pincette');

    expect(sigmoid?.aliases).toContain('sigmoid');
    expect(dnn?.aliases).toContain('DNN');
    expect(prefill?.aliases).toContain('prefill');
    expect(qwen?.description).toContain('3:1');
    expect(kge?.aliases).toContain('KGE');
    expect(graphRag?.aliases).toContain('Graph RAG');
    expect(trajectory?.aliases).toContain('movement path');
    expect(pincette?.aliases).toContain('pincette');
  });

  it('classifies every glossary term by category and session', () => {
    const sessionIds = new Set(sessions.map((session) => session.id));

    for (const entry of glossary) {
      expect(entry.category.length).toBeGreaterThan(0);
      expect(entry.sessionIds.length).toBeGreaterThan(0);

      for (const sessionId of entry.sessionIds) {
        expect(sessionIds.has(sessionId)).toBe(true);
      }
    }
  });

  it('does not expose the instructor direct email address', () => {
    const handoff = readFileSync('docs/handoff.md', 'utf8');
    const sessionNote = readFileSync('content/sessions/01-from-ml-to-dl.md', 'utf8');

    expect(JSON.stringify(sessions)).not.toContain('noseong@');
    expect(handoff).not.toContain('noseong@');
    expect(sessionNote).not.toContain('noseong@');
  });

  it('points every visual note to a public asset', () => {
    for (const session of sessions) {
      for (const visual of session.visualNotes) {
        expect(existsSync(`public${visual.src}`)).toBe(true);
        expect(visual.alt.length).toBeGreaterThan(20);
      }
    }
  });

  it('keeps session 01 scope before Transformer and GPT', () => {
    const session = getSessionById('01');
    const sessionOneTerms = new Set(
      glossary
        .filter((entry) => entry.sessionIds.includes('01'))
        .map((entry) => entry.term),
    );

    expect(session?.coreFlow.join(' ')).not.toContain('Transformer');
    expect(session?.coreFlow.join(' ')).not.toContain('GPT');
    expect(sessionOneTerms.has('Transformer')).toBe(false);
    expect(sessionOneTerms.has('GPT')).toBe(false);
    expect(sessionOneTerms.has('Next Token Prediction')).toBe(false);
  });

  it('uses grouped flow data without losing flow items', () => {
    for (const session of sessions) {
      const groupedItems = session.coreFlowGroups.flatMap((group) => group.items);

      expect(groupedItems).toEqual(session.coreFlow);
    }
  });

  it('keeps a fixed 16-session catalog independent from header navigation', () => {
    expect(totalSessionCount).toBe(16);
    expect(sessionSlots).toHaveLength(16);
    expect(sessionSlots[0].id).toBe('01');
    expect(sessionSlots[1].id).toBe('02');
    expect(sessionSlots[2].id).toBe('03');
    expect(sessionSlots[3].id).toBe('04');
    expect(sessionSlots[4].id).toBe('05');
    expect(sessionSlots[5].id).toBe('06');
    expect(sessionSlots[6].id).toBe('07');
    expect(sessionSlots[15].id).toBe('16');
    expect(sessionSlots[1].session?.id).toBe('02');
    expect(sessionSlots[2].session?.id).toBe('03');
    expect(sessionSlots[3].session?.id).toBe('04');
    expect(sessionSlots[5].session?.id).toBe('06-1');
    expect(sessionSlots[5].sessions.map((session) => session.id)).toEqual([
      '06-1',
      '06-2',
    ]);
    expect(sessionSlots[6].session).toBeUndefined();
    expect(sessionSlots[2].status).toBe('published');
    expect(sessionSlots[3].status).toBe('published');
    expect(sessionSlots[4].status).toBe('deferred');
    expect(sessionSlots[5].status).toBe('published');
    expect(sessionSlots[6].status).toBe('empty');
    expect(sessionSlots[4].session).toBeUndefined();
  });

  it('publishes session 02 learning content', () => {
    const session = getSessionById('02');
    const qwenNote = session?.modelNotes.find(
      (note) => note.title === 'Qwen3-Next 구조',
    );
    const sfmNote = session?.modelNotes.find(
      (note) => note.title === 'Scientific Foundation Model',
    );

    expect(session?.status).toBe('published');
    expect(session?.instructor?.name).toBe('박노성');
    expect(session?.summaryLines).toHaveLength(3);
    expect(session?.coreFlow).toContain('BERT');
    expect(session?.coreFlow).toContain('GPT');
    expect(session?.coreFlow).toContain('Autoregressive Generation');
    expect(session?.coreFlow).toContain('Qwen3-Next');
    expect(session?.conceptCards.length).toBeGreaterThanOrEqual(10);
    expect(session?.visualNotes).toHaveLength(2);
    expect(session?.intuitions.length).toBeGreaterThan(0);
    expect(session?.modelNotes.length).toBeGreaterThan(0);
    expect(session?.quizIds).toHaveLength(5);
    expect(session?.preview).toBeUndefined();
    expect(session?.nextPreview?.title).toBe('Graph Machine Learning');
    expect(qwenNote?.body).toContain('강의자료 기준');
    expect(qwenNote?.highlight).toBe(
      'Gated DeltaNet : Masked Self-Attention = 3 : 1',
    );
    expect(qwenNote?.table?.rows).toEqual([
      ['Gated DeltaNet', '긴 token 의존성, 긴 문맥 처리, 효율성 담당'],
      [
        'Masked Self-Attention',
        '정밀한 reasoning, token 간 세밀한 상호작용 담당',
      ],
    ]);
    expect(sfmNote?.table?.headers).toEqual([
      '구분',
      'LLM',
      'Scientific Foundation Model',
    ]);
  });

  it('keeps session 02 crawl source aligned with Qwen and SFM notes', () => {
    const sessionNote = readFileSync(
      'content/sessions/02-llm-transformer-qwen-next.md',
      'utf8',
    );

    expect(sessionNote).toContain(
      '강의자료 기준으로 Qwen3-Next-80B는 Gated DeltaNet과 masked self-attention을 3:1 비율로 interleave한다.',
    );
    expect(sessionNote).toContain(
      'Gated DeltaNet : Masked Self-Attention = 3 : 1',
    );
    expect(sessionNote).toContain('| Gated DeltaNet | 긴 token 의존성');
    expect(sessionNote).toContain(
      'Scientific Foundation Model은 LLM처럼 대규모 데이터를 학습하지만',
    );
    expect(sessionNote).toContain(
      '| 주요 리스크 | hallucination, reasoning 한계 | 데이터 부족',
    );
    expect(sessionNote).not.toContain('NVIDIA LPU');
    expect(sessionNote).not.toContain('Language Progress Unit');
    expect(sessionNote).not.toContain('GPU에서 LPU로 바뀐다');
  });

  it('publishes session 03 graph ML learning content', () => {
    const session = getSessionById('03');
    const sessionNote = readFileSync(
      'content/sessions/03-graph-machine-learning.md',
      'utf8',
    );

    expect(session?.status).toBe('published');
    expect(session?.title).toBe('Graph Machine Learning');
    expect(session?.instructor?.name).toBe('황지영');
    expect(session?.instructor?.englishName).toBe('Joyce Jiyoung Whang');
    expect(session?.preview).toBeUndefined();
    expect(session?.summaryLines).toHaveLength(3);
    expect(session?.coreFlow).toContain('Knowledge Graph');
    expect(session?.coreFlow).toContain('Graph Representation Learning');
    expect(session?.coreFlow).toContain('Graph Convolutional Network');
    expect(session?.coreFlow).toContain('Fraud Detection');
    expect(session?.conceptCards.length).toBeGreaterThanOrEqual(12);
    expect(session?.visualNotes).toHaveLength(2);
    expect(session?.intuitions.length).toBeGreaterThan(0);
    expect(session?.modelNotes.length).toBeGreaterThan(0);
    expect(session?.quizIds).toHaveLength(5);
    expect(session?.nextPreview?.title).toBe('Knowledge Graph Embedding');
    expect(sessionNote).toContain('Graph Representation Learning');
    expect(sessionNote).toContain('Graph Convolutional Network');
    expect(sessionNote).toContain('Node Classification');
    expect(sessionNote).toContain('Link Prediction');
    expect(sessionNote).toContain('Knowledge Graph Embedding의 세부 구조는 다음 범위');
    expect(sessionNote).not.toContain('예습 노트');
    const sessionJson = JSON.stringify(session);
    expect(sessionJson).not.toContain('resourcePath');
    expect(sessionJson).not.toContain('.pdf');
  });

  it('publishes session 04 knowledge graph embedding learning content', () => {
    const session = getSessionById('04');
    const sessionNote = readFileSync(
      'content/sessions/04-knowledge-graph-embedding.md',
      'utf8',
    );

    expect(session?.status).toBe('published');
    expect(session?.title).toBe('Knowledge Graph Embedding');
    expect(session?.instructor?.name).toBe('황지영');
    expect(session?.preview).toBeUndefined();
    expect(session?.summaryLines).toHaveLength(3);
    expect(session?.coreFlow).toContain('Knowledge Graph Embedding');
    expect(session?.coreFlow).toContain('Scoring Function');
    expect(session?.coreFlow).toContain('GraphRAG');
    expect(session?.conceptCards.length).toBeGreaterThanOrEqual(12);
    expect(session?.visualNotes).toHaveLength(2);
    expect(session?.intuitions.length).toBeGreaterThan(0);
    expect(session?.modelNotes.length).toBeGreaterThan(0);
    expect(session?.quizIds).toHaveLength(5);
    expect(sessionNote).toContain('Knowledge Graph Embedding');
    expect(sessionNote).toContain('Scoring Function');
    expect(sessionNote).toContain('Mean Rank');
    expect(sessionNote).toContain('MRR');
    expect(sessionNote).toContain('Hits@K');
    expect(sessionNote).toContain('Hyper-relational Knowledge Graph');
    expect(sessionNote).toContain('GraphRAG');
    expect(sessionNote).not.toContain('resourcePath');
    expect(sessionNote).not.toContain('.pdf');
  });

  it('publishes session 06-1 mobility big data learning content', () => {
    const session = getSessionById('06-1');
    const sessionNote = readFileSync(
      'content/sessions/06-1-mobility-big-data-analysis.md',
      'utf8',
    );

    expect(session?.status).toBe('published');
    expect(session?.partLabel).toBe('6-1차시');
    expect(session?.title).toBe('Mobility Big Data Analysis');
    expect(session?.instructor?.name).toBe('이재길');
    expect(session?.instructor?.affiliationKo).toBe('KAIST 전산학부');
    expect(session?.summaryLines).toHaveLength(3);
    expect(session?.coreFlow).toContain('Mobility Big Data');
    expect(session?.coreFlow).toContain('Spatial Stream Processing');
    expect(session?.coreFlow).toContain('Anomaly Detection');
    expect(session?.conceptCards.length).toBeGreaterThanOrEqual(12);
    expect(session?.visualNotes).toHaveLength(2);
    expect(session?.intuitions.length).toBeGreaterThan(0);
    expect(session?.modelNotes.length).toBeGreaterThan(0);
    expect(session?.quizIds).toHaveLength(5);
    expect(session?.nextPreview?.title).toBe(
      'Data Science for Infectious Disease Response',
    );
    expect(sessionNote).toContain('Mobility Big Data');
    expect(sessionNote).toContain('Location Inference');
    expect(sessionNote).toContain('Mobility Regularity');
    expect(sessionNote).toContain('Revisit Prediction');
    expect(sessionNote).toContain('Anomaly Detection');
    expect(sessionNote).not.toContain('resourcePath');
    expect(sessionNote).not.toContain('.pdf');
    const sessionJson = JSON.stringify(session);
    expect(sessionJson).not.toContain('resourcePath');
    expect(sessionJson).not.toContain('.pdf');
  });

  it('publishes session 06-2 infectious disease data science learning content', () => {
    const session = getSessionById('06-2');
    const sessionNote = readFileSync(
      'content/sessions/06-2-infectious-disease-data-science.md',
      'utf8',
    );

    expect(session?.status).toBe('published');
    expect(session?.partLabel).toBe('6-2차시');
    expect(session?.title).toBe('Data Science for Infectious Disease Response');
    expect(session?.instructor?.name).toBe('이재길');
    expect(session?.instructor?.affiliationKo).toBe('KAIST 전산학부');
    expect(session?.summaryLines).toHaveLength(3);
    expect(session?.coreFlow).toContain('Imported Case Prediction');
    expect(session?.coreFlow).toContain('COVID-EENet');
    expect(session?.coreFlow).toContain('POI Reconstruction');
    expect(session?.conceptCards.length).toBeGreaterThanOrEqual(12);
    expect(session?.visualNotes).toHaveLength(2);
    expect(session?.intuitions.length).toBeGreaterThan(0);
    expect(session?.modelNotes.length).toBeGreaterThan(0);
    expect(session?.quizIds).toHaveLength(5);
    expect(sessionNote).toContain('Imported Case Prediction');
    expect(sessionNote).toContain('Hi-COVIDNet');
    expect(sessionNote).toContain('COVID-EENet');
    expect(sessionNote).toContain('POI Reconstruction');
    expect(sessionNote).toContain('Privacy-Preserving Data Science');
    expect(sessionNote).not.toContain('resourcePath');
    expect(sessionNote).not.toContain('.pdf');
    const sessionJson = JSON.stringify(session);
    expect(sessionJson).not.toContain('resourcePath');
    expect(sessionJson).not.toContain('.pdf');
  });
});
