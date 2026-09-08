# V9 DEEP PRESERVATION MANIFEST

This V9 package is built ON TOP OF V8.

Preservation rule:
- V8 is not deleted.
- V7/V6/V5/V4/V3 backups already present in V8 are preserved.
- The complete V8 project snapshot is preserved in BACKUP_V8_COMPLETE/.
- New V9 files are additive and are intended not to replace earlier source snapshots.

Deep V9 additions:
- deployment/readiness documentation
- environment checklist
- security checklist
- production smoke-test checklist
- rollback instructions
- payment credential safety guidance
- architecture map
- operational runbook

Before real-money launch, configure secrets in the hosting provider and Supabase; never commit credentials into Git/ZIP.
