// Scorely Beta - JavaScript Functionality

// Global variables
let currentTab = 'setup';
let sessionData = {
    csvData: null,
    blacklist: [],
    inProcess: [],
    idealProfiles: [],
    jobDescription: '',
    filters: {},
    rankings: [],
    progress: {
        totalProfiles: 0,
        rankedProfiles: 0,
        currentBatch: 0
    }
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadSessionData();
});

// Initialize application
function initializeApp() {
    console.log('Scorely Beta initialized');
    showTab('setup');
    updateProgressDisplay();
    generateSampleResults();
}

// Setup event listeners
function setupEventListeners() {
    // Navigation tabs
    document.querySelectorAll('.nav-tab[data-tab]').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            showTab(tabName);
        });
    });

    // File uploads
    setupFileUploads();

    // Radio button toggles
    setupRadioToggles();

    // Experience range slider
    setupExperienceSlider();

    // Form interactions
    setupFormInteractions();
}

// File upload handlers
function setupFileUploads() {
    // Main CSV file
    const csvFile = document.getElementById('csvFile');
    if (csvFile) {
        csvFile.addEventListener('change', handleCSVUpload);
    }

    // Ideal profile files
    ['profile1File', 'profile2File'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', handleIdealProfileUpload);
        }
    });

    // Blacklist file
    const blacklistFile = document.getElementById('blacklistFile');
    if (blacklistFile) {
        blacklistFile.addEventListener('change', handleBlacklistUpload);
    }

    // In process file
    const processFile = document.getElementById('processFile');
    if (processFile) {
        processFile.addEventListener('change', handleInProcessUpload);
    }

    // Job description file
    const jobFile = document.getElementById('jobFile');
    if (jobFile) {
        jobFile.addEventListener('change', handleJobFileUpload);
    }
}

// Radio button toggle handlers
function setupRadioToggles() {
    // Ideal profile type toggles
    ['profile1-type', 'profile2-type'].forEach(name => {
        const radios = document.querySelectorAll(`input[name="${name}"]`);
        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                toggleIdealProfileInput(name, this.value);
            });
        });
    });

    // Blacklist method toggle
    const blacklistRadios = document.querySelectorAll('input[name="blacklist-method"]');
    blacklistRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            toggleBlacklistInput(this.value);
        });
    });

    // In process method toggle
    const processRadios = document.querySelectorAll('input[name="process-method"]');
    processRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            toggleInProcessInput(this.value);
        });
    });

    // Job description method toggle
    const jobRadios = document.querySelectorAll('input[name="job-method"]');
    jobRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            toggleJobInput(this.value);
        });
    });
}

// Experience range slider
function setupExperienceSlider() {
    const slider = document.getElementById('experienceRange');
    const valueDisplay = document.getElementById('experienceValue');

    if (slider && valueDisplay) {
        slider.addEventListener('input', function() {
            valueDisplay.textContent = this.value + '+ years';
        });
    }
}

// Form interactions
function setupFormInteractions() {
    // Auto-save form data
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('change', saveSessionData);
    });
}

// Navigation functions
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab
    const targetTab = document.getElementById(tabName + '-tab');
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // Update navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    const activeNavTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeNavTab) {
        activeNavTab.classList.add('active');
    }

    currentTab = tabName;
}

// File upload handlers
function handleCSVUpload(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('CSV file uploaded:', file.name);
        sessionData.csvData = file;

        // Simulate CSV parsing
        setTimeout(() => {
            sessionData.progress.totalProfiles = 846; // From the example
            updateProgressDisplay();
            showNotification('CSV file uploaded successfully! Found 846 profiles.', 'success');
        }, 1000);
    }
}

function handleIdealProfileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('Ideal profile uploaded:', file.name);
        sessionData.idealProfiles.push(file);
        showNotification('Ideal profile uploaded successfully!', 'success');
    }
}

function handleBlacklistUpload(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('Blacklist file uploaded:', file.name);
        // Simulate processing
        showNotification('Blacklist uploaded successfully!', 'success');
    }
}

function handleInProcessUpload(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('In process file uploaded:', file.name);
        showNotification('In process list uploaded successfully!', 'success');
    }
}

function handleJobFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('Job description file uploaded:', file.name);
        showNotification('Job description uploaded successfully!', 'success');
    }
}

// Toggle functions
function toggleIdealProfileInput(profileName, inputType) {
    const profileNumber = profileName.includes('1') ? '1' : '2';
    const pdfDiv = document.getElementById(`profile${profileNumber}-pdf`);
    const pasteDiv = document.getElementById(`profile${profileNumber}-paste`);

    if (inputType === 'pdf') {
        pdfDiv.style.display = 'block';
        pasteDiv.style.display = 'none';
    } else {
        pdfDiv.style.display = 'none';
        pasteDiv.style.display = 'block';
    }
}

function toggleBlacklistInput(method) {
    const uploadDiv = document.getElementById('blacklist-upload');
    const manualDiv = document.getElementById('blacklist-manual');

    if (method === 'upload') {
        uploadDiv.style.display = 'block';
        manualDiv.style.display = 'none';
    } else {
        uploadDiv.style.display = 'none';
        manualDiv.style.display = 'block';
    }
}

function toggleInProcessInput(method) {
    const uploadDiv = document.getElementById('process-upload');
    const manualDiv = document.getElementById('process-manual');

    if (method === 'upload') {
        uploadDiv.style.display = 'block';
        manualDiv.style.display = 'none';
    } else {
        uploadDiv.style.display = 'none';
        manualDiv.style.display = 'block';
    }
}

function toggleJobInput(method) {
    const textDiv = document.getElementById('job-text');
    const pdfDiv = document.getElementById('job-pdf');

    if (method === 'text') {
        textDiv.style.display = 'block';
        pdfDiv.style.display = 'none';
    } else {
        textDiv.style.display = 'none';
        pdfDiv.style.display = 'block';
    }
}

// Ranking functions
function startRanking() {
    if (!sessionData.csvData) {
        showNotification('Please upload a CSV file first.', 'error');
        return;
    }

    showNotification('Starting ranking process...', 'info');
    showTab('ranking');

    // Initialize ranking simulation
    setTimeout(() => {
        simulateRanking();
    }, 1000);
}

function simulateRanking() {
    const totalProfiles = sessionData.progress.totalProfiles;
    let rankedProfiles = 0;
    const batchSize = 50;

    const interval = setInterval(() => {
        rankedProfiles += Math.random() * 5; // Simulate variable progress
        if (rankedProfiles > totalProfiles) rankedProfiles = totalProfiles;

        sessionData.progress.rankedProfiles = Math.floor(rankedProfiles);
        updateProgressDisplay();

        if (rankedProfiles >= totalProfiles) {
            clearInterval(interval);
            showNotification('Ranking completed!', 'success');
            generateResults();
        }
    }, 500);
}

function continueBatch() {
    showNotification('Continuing ranking...', 'info');
    simulateRanking();
}

function stopRanking() {
    showNotification('Ranking stopped.', 'warning');
}

// Progress update
function updateProgressDisplay() {
    const totalProfiles = sessionData.progress.totalProfiles;
    const rankedProfiles = sessionData.progress.rankedProfiles;

    // Update stats
    const statElements = document.querySelectorAll('.stat-value');
    if (statElements[0]) statElements[0].textContent = `${totalProfiles} (excluding header)`;
    if (statElements[1]) statElements[1].textContent = rankedProfiles;
    if (statElements[2]) statElements[2].textContent = totalProfiles - rankedProfiles;

    // Update progress bars
    const progressFills = document.querySelectorAll('.progress-fill');
    const progressTexts = document.querySelectorAll('.progress-text');

    if (progressFills[0] && progressTexts[0]) {
        const percentage = totalProfiles > 0 ? (rankedProfiles / totalProfiles) * 100 : 0;
        progressFills[0].style.width = percentage + '%';
        progressTexts[0].textContent = `${rankedProfiles}/${totalProfiles} profiles (${Math.round(percentage)}%)`;
    }
}

// Generate sample results
function generateSampleResults() {
    // This would normally come from the ranking algorithm
    sessionData.rankings = generateSampleCandidates();
}

function generateSampleCandidates() {
    return [
        {
            name: 'Alex Semyzhonov',
            title: 'Full Stack Developer',
            company: 'Inetex LTD',
            location: 'Ramat Gan, Israel',
            scores: {
                overall: 87,
                technical: 92,
                cultural: 85,
                experience: 88,
                startup: 84
            },
            category: 'TOP',
            strengths: [
                'Full-stack expertise',
                'Spring Boot & React mastery',
                'Microservices architecture',
                'Strong analytical background'
            ],
            concerns: [
                'May need DevOps mentoring',
                'Limited enterprise experience'
            ],
            insights: 'Strong technical foundation with startup mindset. Good cultural fit for agile environments.',
            linkedinUrl: 'https://linkedin.com/in/alex-semyzhonov'
        },
        {
            name: 'Dror Reshef',
            title: 'Full-stack Developer',
            company: 'SuperCom',
            location: 'Tel Aviv District, Israel',
            scores: {
                overall: 82,
                technical: 88,
                cultural: 78,
                experience: 85,
                startup: 80
            },
            category: 'TOP',
            strengths: [
                'C# .NET Core expertise',
                'React & SignalR experience',
                'Real-time communication systems',
                'Mobile development skills'
            ],
            concerns: [
                'Less startup experience',
                'May need adaptation time'
            ],
            insights: 'Solid technical skills with enterprise background. Great for scaling systems.',
            linkedinUrl: 'https://linkedin.com/in/dror-reshef-1a9533a'
        },
        {
            name: 'Tomer Landesman',
            title: 'Fullstack Software Engineer',
            company: 'env0',
            location: 'Tel Aviv, Israel',
            scores: {
                overall: 89,
                technical: 94,
                cultural: 87,
                experience: 90,
                startup: 86
            },
            category: 'TOP',
            strengths: [
                'Infrastructure as Code (IaC)',
                'AWS & Serverless expertise',
                'DevOps & CI/CD experience',
                'Leadership capabilities'
            ],
            concerns: [
                'High market demand',
                'May be expensive'
            ],
            insights: 'Exceptional technical leader with proven track record. Perfect for senior roles.',
            linkedinUrl: 'https://linkedin.com/in/tomerlm'
        }
    ];
}

function generateResults() {
    const resultsContainer = document.querySelector('#results-tab .candidates-grid');
    if (!resultsContainer) return;

    const topCandidates = sessionData.rankings.filter(c => c.category === 'TOP');

    // Clear existing content
    resultsContainer.innerHTML = '';

    // Generate candidate cards
    topCandidates.forEach(candidate => {
        const cardHTML = createCandidateCard(candidate);
        resultsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });

    showTab('results');
}

function createCandidateCard(candidate) {
    const badgeClass = candidate.category.toLowerCase();
    const badgeIcon = candidate.category === 'TOP' ? 'fas fa-crown' : 'fas fa-thumbs-up';

    return `
        <div class="candidate-card ${badgeClass}">
            <div class="candidate-header">
                <div class="candidate-badge ${badgeClass}">
                    <i class="${badgeIcon}"></i>
                    ${candidate.category} CANDIDATE
                </div>
                <h3>${candidate.name}</h3>
                <p class="candidate-title">${candidate.title} @ ${candidate.company}</p>
                <p class="candidate-location"><i class="fas fa-map-marker-alt"></i> ${candidate.location}</p>
            </div>

            <div class="candidate-scores">
                <h4><i class="fas fa-chart-bar"></i> Scores:</h4>
                <div class="score-grid">
                    <div class="score-item overall">
                        <span class="score-label">Overall:</span>
                        <span class="score-value">${candidate.scores.overall}/100</span>
                    </div>
                    <div class="score-item">
                        <span class="score-label">Technical:</span>
                        <span class="score-value">${candidate.scores.technical}/100</span>
                    </div>
                    <div class="score-item">
                        <span class="score-label">Cultural:</span>
                        <span class="score-value">${candidate.scores.cultural}/100</span>
                    </div>
                    <div class="score-item">
                        <span class="score-label">Experience:</span>
                        <span class="score-value">${candidate.scores.experience}/100</span>
                    </div>
                    <div class="score-item">
                        <span class="score-label">Startup:</span>
                        <span class="score-value">${candidate.scores.startup}/100</span>
                    </div>
                </div>
            </div>

            <div class="candidate-strengths">
                <h4><i class="fas fa-muscle"></i> Strengths:</h4>
                <ul>
                    ${candidate.strengths.map(strength => `<li>${strength}</li>`).join('')}
                </ul>
            </div>

            <div class="candidate-concerns">
                <h4><i class="fas fa-exclamation-triangle"></i> Concerns:</h4>
                <ul>
                    ${candidate.concerns.map(concern => `<li>${concern}</li>`).join('')}
                </ul>
            </div>

            <div class="candidate-insights">
                <h4><i class="fas fa-brain"></i> AI Insights:</h4>
                <p>${candidate.insights}</p>
            </div>

            <div class="candidate-actions">
                <a href="${candidate.linkedinUrl}" target="_blank" class="btn-linkedin">
                    <i class="fab fa-linkedin"></i> View LinkedIn
                </a>
                <button class="btn-favorite" onclick="toggleFavorite('${candidate.name}')">
                    <i class="fas fa-star"></i> Favorite
                </button>
            </div>
        </div>
    `;
}

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function saveSessionData() {
    try {
        const dataToSave = {
            ...sessionData,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('scorely-session', JSON.stringify(dataToSave));
    } catch (e) {
        console.warn('Could not save session data:', e);
    }
}

function loadSessionData() {
    try {
        const saved = localStorage.getItem('scorely-session');
        if (saved) {
            const parsedData = JSON.parse(saved);
            sessionData = { ...sessionData, ...parsedData };
            updateProgressDisplay();
        }
    } catch (e) {
        console.warn('Could not load session data:', e);
    }
}

function resetSession() {
    if (confirm('Are you sure you want to reset all data? This action cannot be undone.')) {
        localStorage.removeItem('scorely-session');
        sessionData = {
            csvData: null,
            blacklist: [],
            inProcess: [],
            idealProfiles: [],
            jobDescription: '',
            filters: {},
            rankings: [],
            progress: {
                totalProfiles: 0,
                rankedProfiles: 0,
                currentBatch: 0
            }
        };

        // Reset form fields
        document.querySelectorAll('input, textarea, select').forEach(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = input.defaultChecked;
            } else {
                input.value = input.defaultValue || '';
            }
        });

        showTab('setup');
        updateProgressDisplay();
        showNotification('Session reset successfully!', 'success');
    }
}

function toggleFavorite(candidateName) {
    showNotification(`${candidateName} added to favorites!`, 'success');
}

// Export functions
function exportQualifiedCandidates() {
    const qualifiedCandidates = sessionData.rankings.filter(c => 
        c.scores.overall >= 60
    );

    // Simulate CSV export
    const csvContent = generateCSVContent(qualifiedCandidates);
    downloadFile(csvContent, `qualified-candidates-${new Date().toISOString().split('T')[0]}.csv`, 'text/csv');

    showNotification(`Exported ${qualifiedCandidates.length} qualified candidates!`, 'success');
}

function exportAIInsights() {
    const insights = generateAIInsightsReport();
    downloadFile(JSON.stringify(insights, null, 2), `ai-insights-${new Date().toISOString().split('T')[0]}.json`, 'application/json');

    showNotification('AI insights report exported!', 'success');
}

function generateCSVContent(candidates) {
    const headers = [
        'Name', 'Title', 'Company', 'Location', 'Overall Score', 
        'Technical Score', 'Cultural Score', 'Experience Score', 'Startup Score',
        'Category', 'Strengths', 'Concerns', 'AI Insights', 'LinkedIn URL'
    ];

    const rows = candidates.map(c => [
        c.name, c.title, c.company, c.location,
        c.scores.overall, c.scores.technical, c.scores.cultural, 
        c.scores.experience, c.scores.startup,
        c.category, c.strengths.join('; '), c.concerns.join('; '),
        c.insights, c.linkedinUrl
    ]);

    return [headers, ...rows].map(row => 
        row.map(cell => `"${cell}"`).join(',')
    ).join('\n');
}

function generateAIInsightsReport() {
    return {
        generatedAt: new Date().toISOString(),
        summary: {
            totalCandidates: sessionData.progress.totalProfiles,
            qualifiedCandidates: sessionData.rankings.filter(c => c.scores.overall >= 60).length,
            topCandidates: sessionData.rankings.filter(c => c.category === 'TOP').length
        },
        patterns: [
            '83% of top candidates have led teams of 5+ people',
            '76% have experience with microservices architecture',
            '67% have worked at both startups and large companies'
        ],
        topCompanies: [
            { name: 'Google', count: 18 },
            { name: 'Microsoft', count: 15 },
            { name: 'Amazon', count: 12 }
        ],
        recommendedSearches: [
            'Senior R&D VPs from Google',
            'Machine Learning leads from Series B startups',
            'DevOps experts with Kubernetes experience'
        ],
        actionItems: [
            'Focus outreach on candidates from Google and Microsoft',
            'Prioritize candidates with microservices experience',
            'Look for additional DevOps talent in Tel Aviv area'
        ]
    };
}

function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
}

// Add CSS for candidate cards and notifications
const additionalCSS = `
.candidate-card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    border: 1px solid #e8e9ea;
    transition: all 0.3s ease;
}

.candidate-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.candidate-card.top {
    border-left: 4px solid #ffd700;
}

.candidate-card.good {
    border-left: 4px solid #4facfe;
}

.candidate-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.candidate-badge.top {
    background: linear-gradient(135deg, #ffd700, #ffb300);
    color: white;
}

.candidate-badge.good {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    color: white;
}

.candidate-header h3 {
    margin: 0 0 5px 0;
    color: #2c3e50;
}

.candidate-title {
    color: #666;
    font-weight: 500;
    margin-bottom: 5px;
}

.candidate-location {
    color: #999;
    font-size: 0.9rem;
}

.candidate-scores {
    margin: 15px 0;
}

.candidate-scores h4 {
    margin-bottom: 10px;
    color: #2c3e50;
    display: flex;
    align-items: center;
    gap: 8px;
}

.score-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 8px;
}

.score-item {
    background: #f8f9fa;
    padding: 8px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.score-item.overall {
    grid-column: 1 / -1;
    background: linear-gradient(135deg, #e3f2fd, #f3e5f5);
    font-weight: bold;
}

.score-label {
    font-size: 0.9rem;
    color: #666;
}

.score-value {
    font-weight: bold;
    color: #4facfe;
}

.candidate-strengths, .candidate-concerns, .candidate-insights {
    margin: 15px 0;
}

.candidate-strengths h4, .candidate-concerns h4, .candidate-insights h4 {
    margin-bottom: 8px;
    color: #2c3e50;
    display: flex;
    align-items: center;
    gap: 8px;
}

.candidate-strengths ul, .candidate-concerns ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.candidate-strengths li {
    padding: 3px 0;
    color: #28a745;
    position: relative;
    padding-left: 15px;
}

.candidate-strengths li:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #28a745;
    font-weight: bold;
}

.candidate-concerns li {
    padding: 3px 0;
    color: #ffc107;
    position: relative;
    padding-left: 15px;
}

.candidate-concerns li:before {
    content: "⚠";
    position: absolute;
    left: 0;
    color: #ffc107;
}

.candidate-insights p {
    color: #666;
    font-style: italic;
    margin: 0;
}

.candidate-actions {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #e8e9ea;
}

.btn-linkedin, .btn-favorite {
    flex: 1;
    padding: 8px 15px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: all 0.3s ease;
}

.btn-linkedin {
    background: #0077b5;
    color: white;
}

.btn-linkedin:hover {
    background: #005885;
    transform: translateY(-2px);
}

.btn-favorite {
    background: #f8f9fa;
    color: #666;
    border: 1px solid #e8e9ea;
}

.btn-favorite:hover {
    background: #ffc107;
    color: white;
    transform: translateY(-2px);
}

.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 1000;
    max-width: 400px;
    border-left: 4px solid #4facfe;
}

.notification.success {
    border-left-color: #28a745;
}

.notification.error {
    border-left-color: #dc3545;
}

.notification.warning {
    border-left-color: #ffc107;
}

.notification button {
    background: none;
    border: none;
    cursor: pointer;
    color: #666;
    margin-left: auto;
}
`;

// Inject additional CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);

// Export functions for buttons
window.exportQualifiedCandidates = exportQualifiedCandidates;
window.exportAIInsights = exportAIInsights;
window.startRanking = startRanking;
window.continueBatch = continueBatch;
window.stopRanking = stopRanking;
window.resetSession = resetSession;
window.toggleFavorite = toggleFavorite;
