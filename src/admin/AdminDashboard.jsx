import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Mail,
  Settings,
  LogOut,
  Search,
  Bell,
  Menu,
  X,
  Inbox,
  MailOpen,
  Trash2,
  ArrowLeft,
  UserRound,
  CalendarDays,
  Clock3,
  CheckCheck,
} from "lucide-react";
import "./AdminDashboard.css";

// Temporary sample data for the frontend design.
// We'll replace this with real backend data later.
const sampleMessages = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    subject: "Website Development",
    message:
      "Hello KaiSed! I visited your portfolio and would like to discuss a website development project. Please let me know when you're available.",
    date: "2026-09-20T10:30:00",
    read: false,
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    subject: "Project Collaboration",
    message:
      "Hi! I'm interested in collaborating with you on a project involving modern web technologies. I would love to hear from you.",
    date: "2026-09-19T14:15:00",
    read: false,
  },
  {
    id: 3,
    name: "Alex Johnson",
    email: "alex@example.com",
    subject: "General Inquiry",
    message:
      "Hello, I have a question about your projects and the technologies you used. Could you share some additional information?",
    date: "2026-09-18T09:45:00",
    read: true,
  },
  {
    id: 4,
    name: "Emma Brown",
    email: "emma@example.com",
    subject: "Job Opportunity",
    message:
      "Hello KaiSed, I came across your portfolio and wanted to contact you regarding a potential opportunity.",
    date: "2026-09-17T16:20:00",
    read: true,
  },
];

const formatDate = (date) =>
  new Date(date).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const formatTime = (date) =>
  new Date(date).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

export default function AdminDashboard({ onLogout }) {
  const [messages, setMessages] = useState(sampleMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const unreadCount = messages.filter((message) => !message.read).length;

  const filteredMessages = useMemo(() => {
    return messages.filter((message) => {
      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "unread" && !message.read) ||
        (activeFilter === "read" && message.read);

      const search = searchTerm.toLowerCase();

      const matchesSearch =
        message.name.toLowerCase().includes(search) ||
        message.email.toLowerCase().includes(search) ||
        message.subject.toLowerCase().includes(search) ||
        message.message.toLowerCase().includes(search);

      return matchesFilter && matchesSearch;
    });
  }, [messages, activeFilter, searchTerm]);

  const openMessage = (message) => {
    const updatedMessage = { ...message, read: true };

    setMessages((current) =>
      current.map((item) =>
        item.id === message.id ? updatedMessage : item
      )
    );

    setSelectedMessage(updatedMessage);
  };

  const deleteMessage = (id) => {
    setMessages((current) => current.filter((message) => message.id !== id));
    setSelectedMessage(null);
  };

  const markAllAsRead = () => {
    setMessages((current) =>
      current.map((message) => ({ ...message, read: true }))
    );
  };

  return (
    <div className="admin-dashboard">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          className="admin-sidebar-overlay"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="admin-brand">
          <div className="admin-brand-icon">K</div>

          <div className="admin-brand-text">
            <h2>KaiSed<span>.</span></h2>
            <p>PRIVATE WORKSPACE</p>
          </div>

          <button
            className="admin-mobile-close"
            aria-label="Close sidebar"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="admin-profile">
          <div className="admin-avatar">K</div>

          <div>
            <h3>KaiSed</h3>
            <p>Portfolio Admin</p>
          </div>

          <span className="admin-online-indicator" />
        </div>

        <p className="admin-nav-label">WORKSPACE</p>

        <nav className="admin-navigation">
          <button className="admin-nav-item">
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </button>

          <button className="admin-nav-item active">
            <Mail size={19} />
            <span>Messages</span>

            {unreadCount > 0 && (
              <span className="admin-nav-badge">{unreadCount}</span>
            )}
          </button>

          <button className="admin-nav-item">
            <Settings size={19} />
            <span>Settings</span>
          </button>
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-tip">
            <div className="admin-tip-icon">
              <Inbox size={19} />
            </div>

            <h4>Your private inbox</h4>

            <p>
              Messages sent through your portfolio will appear here once the
              backend is connected.
            </p>
          </div>

          <button
            type="button"
            className="admin-nav-item admin-logout-button"
            onClick={onLogout}
          >
            <LogOut size={19} />
            <span>Log out</span>
          </button>

          <p className="admin-sidebar-footer">KaiSed Portfolio · Admin</p>
        </div>
      </aside>

      {/* Main area */}
      <main className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button
              className="admin-mobile-menu"
              aria-label="Open navigation"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>

            <div>
              <p className="admin-breadcrumb">Workspace / Messages</p>
              <h1>Messages <span>Inbox</span></h1>
            </div>
          </div>

          <div className="admin-topbar-actions">
            <div className="admin-notification-wrapper">
              <button
                className={`admin-icon-button ${
                  notificationOpen ? "icon-button-active" : ""
                }`}
                aria-label="Notifications"
                onClick={() => setNotificationOpen((open) => !open)}
              >
                <Bell size={20} />

                {unreadCount > 0 && <span className="admin-notification-dot" />}
              </button>

              {notificationOpen && (
                <div className="admin-notification-popover">
                  <div className="admin-popover-heading">
                    <h3>Notifications</h3>
                    <span>{unreadCount} unread</span>
                  </div>

                  {unreadCount > 0 ? (
                    messages
                      .filter((message) => !message.read)
                      .map((message) => (
                        <button
                          className="admin-notification-item"
                          key={message.id}
                          onClick={() => {
                            openMessage(message);
                            setNotificationOpen(false);
                          }}
                        >
                          <span className="admin-notification-icon">
                            <Mail size={17} />
                          </span>

                          <span>
                            <strong>{message.name}</strong>
                            <small>{message.subject}</small>
                          </span>
                        </button>
                      ))
                  ) : (
                    <p className="admin-empty-notifications">
                      You're all caught up.
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="admin-topbar-divider" />

            <div className="admin-topbar-user">
              <div className="admin-avatar small-avatar">K</div>
              <div>
                <strong>KaiSed</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        <section className="admin-content">
          {/* Welcome */}
          <motion.div
            className="admin-welcome"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div>
              <p className="admin-eyebrow">YOUR PRIVATE WORKSPACE</p>
              <h2>
                Welcome back, <span>KaiSed.</span>
              </h2>
              <p className="admin-welcome-description">
                Keep track of conversations and stay connected with your
                visitors.
              </p>
            </div>

            <div className="admin-welcome-decoration">
              <Mail size={42} strokeWidth={1.3} />
              <span />
            </div>
          </motion.div>

          {/* Statistics */}
          <div className="admin-stats-grid">
            <motion.div
              className="admin-stat-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
            >
              <div className="admin-stat-top">
                <span className="admin-stat-icon purple-stat">
                  <Inbox size={20} />
                </span>
                <span className="admin-stat-label">ALL MESSAGES</span>
              </div>

              <strong>{messages.length}</strong>
              <p>Total conversations</p>
            </motion.div>

            <motion.div
              className="admin-stat-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
            >
              <div className="admin-stat-top">
                <span className="admin-stat-icon orange-stat">
                  <Mail size={20} />
                </span>
                <span className="admin-stat-label">UNREAD</span>
              </div>

              <strong>{unreadCount}</strong>
              <p>Waiting for your attention</p>
            </motion.div>

            <motion.div
              className="admin-stat-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
            >
              <div className="admin-stat-top">
                <span className="admin-stat-icon green-stat">
                  <MailOpen size={20} />
                </span>
                <span className="admin-stat-label">READ</span>
              </div>

              <strong>{messages.length - unreadCount}</strong>
              <p>Already reviewed</p>
            </motion.div>
          </div>

          {/* Inbox */}
          <motion.section
            className="admin-inbox-panel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
          >
            <div className="admin-inbox-heading">
              <div>
                <h2>Your inbox</h2>
                <p>Manage messages sent through your portfolio.</p>
              </div>

              <button
                className="admin-mark-read-button"
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
              >
                <CheckCheck size={16} />
                Mark all as read
              </button>
            </div>

            <div className="admin-inbox-toolbar">
              <div className="admin-filter-tabs">
                {[
                  ["all", "All messages"],
                  ["unread", "Unread"],
                  ["read", "Read"],
                ].map(([filter, label]) => (
                  <button
                    key={filter}
                    className={activeFilter === filter ? "selected-filter" : ""}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {label}

                    {filter === "unread" && unreadCount > 0 && (
                      <span className="admin-filter-count">{unreadCount}</span>
                    )}
                  </button>
                ))}
              </div>

              <label className="admin-search">
                <Search size={18} />

                <input
                  type="search"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </label>
            </div>

            {/* Message list and details */}
            <div
              className={`admin-message-layout ${
                selectedMessage ? "message-selected" : ""
              }`}
            >
              <div className="admin-message-list">
                {filteredMessages.length > 0 ? (
                  filteredMessages.map((message) => (
                    <button
                      className={`admin-message-row ${
                        !message.read ? "unread-message" : ""
                      } ${
                        selectedMessage?.id === message.id
                          ? "selected-message"
                          : ""
                      }`}
                      key={message.id}
                      onClick={() => openMessage(message)}
                    >
                      <div className="admin-message-avatar">
                        {message.name.charAt(0).toUpperCase()}
                      </div>

                      <div className="admin-message-summary">
                        <div className="admin-message-person">
                          <strong>{message.name}</strong>

                          {!message.read && (
                            <span className="admin-unread-indicator" />
                          )}
                        </div>

                        <p className="admin-message-subject">
                          {message.subject}
                        </p>

                        <p className="admin-message-preview">
                          {message.message}
                        </p>

                        <span className="admin-message-mobile-date">
                          {formatDate(message.date)}
                        </span>
                      </div>

                      <span className="admin-message-date">
                        {formatDate(message.date)}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="admin-empty-state">
                    <Inbox size={32} />
                    <h3>No messages found</h3>
                    <p>Try changing your filter or search term.</p>
                  </div>
                )}
              </div>

              {/* Selected message */}
              <div className="admin-message-details">
                {selectedMessage ? (
                  <motion.div
                    key={selectedMessage.id}
                    className="admin-message-detail-content"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="admin-detail-topbar">
                      <button
                        className="admin-back-button"
                        onClick={() => setSelectedMessage(null)}
                      >
                        <ArrowLeft size={17} />
                        Back to inbox
                      </button>

                      <button
                        className="admin-delete-button"
                        onClick={() => deleteMessage(selectedMessage.id)}
                        aria-label="Delete message"
                        title="Delete message"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <span className="admin-detail-category">
                      MESSAGE DETAILS
                    </span>

                    <h2 className="admin-detail-subject">
                      {selectedMessage.subject}
                    </h2>

                    <div className="admin-sender-card">
                      <div className="admin-message-avatar detail-avatar">
                        {selectedMessage.name.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <strong>{selectedMessage.name}</strong>
                        <a href={`mailto:${selectedMessage.email}`}>
                          {selectedMessage.email}
                        </a>
                      </div>
                    </div>

                    <div className="admin-detail-metadata">
                      <span>
                        <CalendarDays size={15} />
                        {formatDate(selectedMessage.date)}
                      </span>

                      <span>
                        <Clock3 size={15} />
                        {formatTime(selectedMessage.date)}
                      </span>
                    </div>

                    <div className="admin-detail-divider" />

                    <p className="admin-detail-message">
                      {selectedMessage.message}
                    </p>

                    <a
                      className="admin-reply-button"
                      href={`mailto:${selectedMessage.email}?subject=${encodeURIComponent(
                        `Re: ${selectedMessage.subject}`
                      )}`}
                    >
                      <Mail size={17} />
                      Reply by email
                    </a>
                  </motion.div>
                ) : (
                  <div className="admin-detail-placeholder">
                    <div className="admin-placeholder-icon">
                      <UserRound size={28} />
                    </div>

                    <h3>Select a message</h3>

                    <p>
                      Choose a conversation from your inbox to view the
                      sender's details and read their message.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="admin-inbox-footer">
              <span>
                Showing {filteredMessages.length} of {messages.length} messages
              </span>

              <span className="admin-demo-notice">
                <span />
                Frontend demo data
              </span>
            </div>
          </motion.section>

          <footer className="admin-page-footer">
            <span>© {new Date().getFullYear()} KaiSed Portfolio</span>
            <span>Private Admin Workspace</span>
          </footer>
        </section>
      </main>
    </div>
  );
}